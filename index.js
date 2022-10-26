import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import mongoose from "mongoose";

import { v2 as cloudinaryBase } from "cloudinary";

import router from "./router/index.js";

// Models
const PORT = process.env.PORT || 5500;
const app = express();

//Middlewares
app.use(express.json());
app.use(cors());
app.use(express.static("static"));
app.use("/api", router);

cloudinaryBase.config({
  cloud_name: "duhprrckc",
  api_key: "771358562188676",
  api_secret: "15KrqkI-FBFrIbg0KY5AA5lSYKw",
});

const start = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://admin:admin@cluster0.ghnydlg.mongodb.net/?retryWrites=true&w=majority"
    );

    app.listen(PORT, () =>
      console.log(`Server has been started on port ${PORT}`)
    );
  } catch (error) {
    console.log(e);
  }
};

start();
