import { Schema } from "mongoose";
import mongoose from "mongoose";

const movieSchema = new Schema(
  {
    title: String,
    sinopsis: String,
    image: String,
  },
  {
    timestamps: true,
  }
);

const Movie = mongoose.models.Movie || mongoose.model("Movie", movieSchema);

export default Movie;
