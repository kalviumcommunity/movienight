import Movie from "./models/Movie.js";

// ---- TASK 2: create a movie ----
// createMovie(data) — data is { title, director, genre, year }.
// Create the movie with an empty reviews array and return the saved document.
//   e.g. return Movie.create({ ...data, reviews: [] });
export async function createMovie(data) {
  // TODO
}

// ---- TASK 2: read movies, newest first, with an optional filter ----
// getMovies(filter) — return all movies matching `filter` (or all if none),
// sorted by createdAt descending.
//   e.g. return Movie.find(filter).sort({ createdAt: -1 });
export async function getMovies(filter = {}) {
  // TODO
}

// ---- TASK 3: add an embedded review ----
// addReview(movieId, author, rating, comment) — find the movie by id,
// push the review onto its `reviews` array, save (so validators run), return it.
//   Use Movie.findById(...), .reviews.push(...), await movie.save().
export async function addReview(movieId, author, rating, comment) {
  // TODO
}

// ---- TASK 3: delete a movie ----
// deleteMovie(movieId) — delete by id.
//   Return { deleted: true } on success, or { deleted: false } if none was found.
export async function deleteMovie(movieId) {
  // TODO
}
