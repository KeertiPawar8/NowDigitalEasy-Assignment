const { UserModel } = require("../models/user.model");
const mongoose = require("mongoose");
const express = require("express");
const userRouter = express.Router();

userRouter.post("/registerUser", async (req, res) => {
  const { name, role, email, phoneNumber } = req.body;

  const checkuser = await UserModel.find({ email });

  if (checkuser.length > 0) {
    res.status(200).send({ msg: "user already exist please login" });
  } else {
    try {
      const user = new UserModel({ name, role, email, phoneNumber });
      await user.save();
      res.status(200).send({ msg: "user has been registered" });
    } catch (err) {
      res.status(400).send(err);
    }
  }
});

userRouter.get("/AllUserDetails", async (req, res) => {
  try {
    let data = await UserModel.find();
    res.status(200).send(data);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

userRouter.get("/singleUserDetails/:id", async (req, res) => {
  
  const id = req.params.id;
  try {
    const singleUserDetails = await UserModel.find({ _id: id });
    res.status(200).send(singleUserDetails);
  } catch (err) {
    res.send(err);
  }
});

userRouter.delete("/deleteUser/:id", async (req, res) => {
  const id = req.params.id;

  await UserModel.findByIdAndDelete({ _id: id });
  res.send({ msg: "User data has been deleted" });
});

userRouter.put("/updateUser/:id", async (req, res) => {
  const id = req.params.id;
  await UserModel.findByIdAndUpdate({ _id: id }, req.body);
  res.send({ msg: "User data has been updated" });
});

module.exports = {
  userRouter,
};
