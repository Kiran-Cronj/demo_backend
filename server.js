import mongoose from "mongoose";
import express from "express"
import { Router } from "express";
import router from "./src/routes/user-routes.js";
const app = express();
app.use(router)

mongoose
  .connect(
    "mongodb+srv://kirankumar953878:root@cluster0.yvi4fvn.mongodb.net/blog_project?retryWrites=true&w=majority"
  )
  .then(() => app.listen(5000))
  .then(() => console.log("connected to database at 5000"))
  .catch((error) => {
    console.log(error);
  });

app.get("/", (req, res) => {
  res.send("this is homepage");
  console.log("this is dashboard");
});
app.get("/about", (req, res) => {
  res.send("this is about");
});
app.get("/blog", (req, res) => {
  res.send("this is blog page");
});
// app.listen(3000, () => {
//   console.log("server is running on 3000");
// });
