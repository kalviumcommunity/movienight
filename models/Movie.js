import mongoose from "mongoose";

// ---- TASK 1: define reviewSchema (embedded subdocument) ----
// Fields:
//   - author  (String, required)
//   - rating  (Number, required, min 1, max 5)
//   - comment (String)
//
// const reviewSchema = new mongoose.Schema({ ... });

// ---- TASK 1: define movieSchema ----
// Fields:
//   - title     (String, required, trim)
//   - director  (String, required)
//   - genre     (String, enum ["action", "comedy", "drama", "horror", "other"], default "other")
//   - year      (Number, min 1888)
//   - reviews   (array of reviewSchema — embedded)
//   - createdAt (Date, default Date.now)
//
// const movieSchema = new mongoose.Schema({ ... });

// ---- TASK 1: compile and export the model ----
// const Movie = mongoose.model("Movie", movieSchema);
// export default Movie;

export default null; // TODO: replace with the compiled Movie model
