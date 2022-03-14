import express from "express";
const mongoose =require("mongoose");
import cors from "cors";
import { readdirSync } from "fs";
import User from "./model/User";
require("dotenv").config();
const app = express();
const http = require("http").createServer(app);
import route from './auth'
// db
mongoose
  .connect(
    "mongodb+srv://arefin:arefin@cluster0.jfbc7.mongodb.net/personal?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }
  )
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB CONNECTION ERROR => ", err));




  app.use(express.json({ limit: "5mb" }));
  app.use(express.urlencoded({ extended: true }));
  app.use(
    cors({
      origin: "*",
    })
  );
  app.use('/api/',route)




app.listen(8000, () => {
  console.log("Server is running");
});
