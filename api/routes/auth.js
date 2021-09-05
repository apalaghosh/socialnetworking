const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const { OAuth2Client } = require("google-auth-library");
const { response } = require("express");
const jwt = require("jsonwebtoken");

const client = new OAuth2Client(process.env.CLIENT_ID);
//SignUp
// router.get("/signup", async (req, res) => {
//   const user = await new User({
//     username: "Apala",
//     email: "abc@mas.com",
//     password: "2345wqe",
//   });
//   await user.save();
//   res.send("ok");
// });

//Sign Up
router.post("/signup", async (req, res, next) => {
  try {
    //generate hased paswd
    const salt = await bcrypt.genSalt(10);
    const hashedPswd = await bcrypt.hash(req.body.password, salt);

    //create new user
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPswd,
    });

    //save user and return response
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
    next(err);
  }
});

//Login
router.post("/login", async (req, res, next) => {
  console.log(req.body);
  const { email, password } = req.body;
  User.findOne({ email }).exec((err, user) => {
    if (err) {
      return response.status(400).json({
        error: "User doesn't exist",
      });
    }
    if (user.password !== password) {
      return res.status(400).json({
        error: "Email or password is incorrect",
      });
    }
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SIGNIN_KEY, {
      expiresIn: "7d",
    });
    // const { _id, username, email } = user;
    res.json({ token, user: user }); //{ token, user: { _id, username, email } }
  });
});

// login
// router.post("/login", async (req, res, next) => {
//   try {
//     const user = await User.findOne({ email: req.body.email });
//     !user && res.status(404).json("User not found");

//     const validPassword = await bcrypt.compare(
//       req.body.password,
//       user.password
//     );
//     !validPassword && res.status(400).json("Wrong Password");

//     res.status(200).json(user);
//   } catch (err) {
//     console.log(err);
//     next(err);
//   }
// });

//google login
router.post("/googlelogin", async (req, res, next) => {
  // try {
  const tokenId = req.body;
  client
    .verifyIdToken({
      idToken: tokenId,
      audience: process.env.CLIENT_ID,
    })
    .then((response) => {
      // const user = await User.findOne({ email: req.body.email });
      console.log(response);
    });
});

module.exports = router;
