const router = require("express").Router();
const bcrypt = require("bcrypt");
const { findById } = require("../models/User");
const User = require("../models/User");

// router.get("/", (req, res) => {
//   res.send("Hey its user route");
// });

//update user
router.put("/:id", async (req, res, next) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    if (req.body.password) {
      try {
        const salt = await bcrypt.genSalt(10);
        const hashedPswd = await bcrypt.hash(req.body.password, salt);
      } catch (err) {
        console.log(err);
        next(err);
      }
    }
    try {
      const user = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      res.status(200).json("Account has been updated");
    } catch (err) {
      console.log(err);
      next(err);
    }
  } else {
    return res.status(403).json("Not allowed to change others account");
  }
});

//delete user
router.delete("/:id", async (req, res, next) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      res.status(200).json("Account has been deleted");
    } catch (err) {
      console.log(err);
      next(err);
    }
  } else {
    return res.status(403).json("You can delete your own account only");
  }
});

//get user
//localhost:4000/users?userId=12324
//localhost:4000/users?userName=Apala
router.get("/", async (req, res, next) => {
  const userId = req.query.userId;
  const username = req.query.username;
  try {
    const user = userId
      ? await User.findById(userId)
      : await User.findOne({ username: username });
    console.log(user._doc);
    const { password, updatedAt, createdAt, isAdmin, __v, _id, ...other } =
      user._doc;
    res.status(200).json(other);
  } catch (err) {
    console.log(err);
    next(err);
  }
});

//follow a user
router.put("/:id/follow", async (req, res, next) => {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);
      if (!user.followers.includes(req.body.userId)) {
        await user.updateOne({ $push: { followers: req.body.userId } });
        await currentUser.updateOne({ $push: { followings: req.params.id } });
        res.status(200).json("User has been Followed");
      } else {
        res.status(403).json("Already Following");
      }
    } catch (err) {
      console.log(err);
      next(err);
    }
  } else {
    return res.status(403).json("You can not follow yourself");
  }
});

//unfollow a user
router.put("/:id/unfollow", async (req, res, next) => {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);
      if (user.followers.includes(req.body.userId)) {
        await user.updateOne({ $pull: { followers: req.body.userId } });
        await currentUser.updateOne({ $pull: { followings: req.params.id } });
        res.status(200).json("User has been unFollowed");
      } else {
        res.status(403).json("Already unFollowing");
      }
    } catch (err) {
      console.log(err);
      next(err);
    }
  } else {
    return res.status(403).json("You can not unfollow yourself");
  }
});

module.exports = router;
