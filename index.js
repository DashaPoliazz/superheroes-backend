import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import mongoose from "mongoose";
import fileupload from "express-fileupload";
import { v2 as cloudinaryBase } from "cloudinary";

import router from "./router/index.js";

// Models
const PORT = process.env.PORT || 5500;
const app = express();

//Middlewares
app.use(express.json());
app.use(cors());
app.use(express.static("static"));
app.use(fileupload());
app.use("/api", router);

cloudinaryBase.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET_KEY,
});

const start = async () => {
  try {
    await mongoose.connect(process.env.DATA_BASE_URL);

    app.listen(PORT, () =>
      console.log(`Server has been started on port ${PORT}`)
    );
  } catch (error) {
    console.log(e);
  }
};

start();
