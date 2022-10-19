const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 5500;
const app = express();

//Middlewares
app.use(express.json());
app.use(cors());

app.get("/name", (req, res) => {
  res.json("Hello world");
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
