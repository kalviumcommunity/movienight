# MovieNight — Mongoose Model & Operations

A tiny movie log built with **Node.js + Mongoose 7 + MongoDB**. Each movie stores its reviews as
**embedded subdocuments**. Define the schema and implement four data operations, then prove they
work with the test script.

## What you edit
- `models/Movie.js` — the schema (Task 1)
- `operations.js` — `createMovie`, `getMovies`, `addReview`, `deleteMovie` (Tasks 2–3)

Do **not** change `db.js`, `seed.js`, or `test.js`.

## Setup & run
```bash
npm install
cp .env.example .env          # set MONGODB_URI (Atlas or local MongoDB)
npm run seed                  # inserts 5 starter movies
npm run test                  # runs your operations end to end
```

When everything is correct, `npm run test` prints `✓ All tests passed!`.

## Schema shape
- **reviewSchema** (embedded): `author` (required), `rating` (required, 1–5), `comment`.
- **movieSchema**: `title` (required, trim), `director` (required),
  `genre` (enum: action / comedy / drama / horror / other, default `other`),
  `year` (min 1888), `reviews` (array of reviewSchema), `createdAt` (default now).
