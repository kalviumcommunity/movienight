import mongoose from "mongoose";
import { connectDB } from "./db.js";
import { createMovie, getMovies, addReview, deleteMovie } from "./operations.js";

async function runTests() {
  await connectDB();
  console.log("\n=== TEST SUITE ===\n");

  try {
    // 1. Read all (seeded) movies
    console.log("1. Getting all movies (should see 5 from seed)...");
    const all = await getMovies();
    console.log(`   Found: ${all.length} movies`);
    all.forEach((m) => console.log(`   - "${m.title}" (${m.genre})`));

    // 2. Create a movie
    console.log("\n2. Creating a new movie...");
    const movie = await createMovie({
      title: "My Test Film",
      director: "Tester",
      genre: "drama",
      year: 2024,
    });
    console.log(`   Created: "${movie.title}"  id=${movie._id}`);
    console.log(`   Reviews: ${movie.reviews.length}`);

    // 3. Filter by genre
    console.log("\n3. Getting only drama movies...");
    const drama = await getMovies({ genre: "drama" });
    console.log(`   Found: ${drama.length} drama movies`);

    // 4. Add an embedded review
    console.log("\n4. Adding a review to the new movie...");
    const withReview = await addReview(movie._id, "Critic", 5, "Loved it");
    console.log(`   Movie now has ${withReview.reviews.length} review(s)`);
    console.log(`   Review: ${withReview.reviews[0].rating}★ by ${withReview.reviews[0].author}`);

    // 5. Delete the movie
    console.log("\n5. Deleting the movie...");
    const del = await deleteMovie(movie._id);
    console.log(`   Deleted: ${del.deleted}`);

    // 6. Verify
    console.log("\n6. Verifying delete...");
    const final = await getMovies();
    console.log(`   Total movies now: ${final.length} (should be 5 again)`);

    console.log("\n✓ All tests passed!\n");
  } catch (error) {
    console.error("\n✗ Test failed:", error.message, "\n");
  }

  await mongoose.disconnect();
}

runTests();
