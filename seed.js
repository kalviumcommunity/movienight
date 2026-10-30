import mongoose from "mongoose";
import { connectDB } from "./db.js";
import Movie from "./models/Movie.js";

const MOVIES = [
  {
    title: "The Quiet Shore",
    director: "Ava Lin",
    genre: "drama",
    year: 2018,
    reviews: [
      { author: "Sam", rating: 5, comment: "Beautifully slow." },
      { author: "Nara", rating: 4, comment: "Great cinematography." },
    ],
  },
  {
    title: "Laugh Track",
    director: "Rohan Das",
    genre: "comedy",
    year: 2021,
    reviews: [{ author: "Mia", rating: 4, comment: "Genuinely funny." }],
  },
  {
    title: "Night Shift",
    director: "Kabir Rao",
    genre: "horror",
    year: 2019,
    reviews: [],
  },
  {
    title: "Last Stand",
    director: "Ava Lin",
    genre: "action",
    year: 2023,
    reviews: [{ author: "Leo", rating: 3, comment: "Fun but loud." }],
  },
  {
    title: "Letters Home",
    director: "Tara Iyer",
    genre: "drama",
    year: 2017,
    reviews: [],
  },
];

async function seed() {
  await connectDB();
  await Movie.deleteMany({});
  const created = await Movie.insertMany(MOVIES);
  console.log(`✓ Seeded ${created.length} movies`);
  await mongoose.disconnect();
}

seed().catch((error) => {
  console.error("✗ Seed failed:", error.message);
  process.exit(1);
});
