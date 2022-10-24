import mongoose, { Schema, model } from "mongoose";

const SuperheroSchema = new Schema({
  nickname: {
    type: String,
    required: true,
  },
  real_name: {
    type: String,
    required: true,
  },
  origin_description: {
    type: String,
    required: true,
  },
  superpowers: {
    type: Array,
    required: true,
  },
  catch_phrase: {
    type: String,
    requiered: true,
  },
  currentImage: {
    type: String,
    required: false,
  },
  Images: {
    type: Array,
    required: false,
  },
});

export default mongoose.model("Superhero", SuperheroSchema);
