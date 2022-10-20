import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import mongoose from "mongoose";

import router from "./router/index.js";

// Models
const PORT = process.env.PORT || 5500;
const app = express();

//Middlewares
app.use(express.json());
app.use(cors());
app.use("/api", router);

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
