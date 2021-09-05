const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const helmet = require("helmet");
const morgan = require("morgan");
const router = express.Router();
const cors = require("cors");
const data = require("./db");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
const error = require("./middleware/error");

const app = express();

dotenv.config();

mongoose.connect(process.env.MONGO_URL, () => {
  console.log("Connection to MongoDB successfull");
});

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use(cors());

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);

app.get("/", (req, res) => {
  // console.log(req);
  // console.log(res);
  res.send("Welcome Home Page");
});

app.get("/users", (req, res) => {
  res.send("Welcome users");
});

app.get("/getdata", (req, res) => {
  // res.json({ posts: data });
  res.send(data);
});

app.use(error);

app.listen(4000, () => {
  console.log("Backend server is running. App is listening on port 4000");
});
