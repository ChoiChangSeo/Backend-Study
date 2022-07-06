import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import {
  createToken,
  phoneNumberValidation,
  sendTokenToPhone,
} from "./phone.js";
import { Token } from "./models/tokens.model.js";

dotenv.config();

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.post("/tokens/phone", async (req, res) => {
  const phone = req.body.phone;
  const isValid = phoneNumberValidation(phone);
  if (isValid) {
    const newToken = createToken();
    const existPhone = await Token.findOne({ phone: phone });
    if (existPhone === null) {
      new Token({
        phone: phone,
        token: newToken,
        isAuth: false,
      }).save();
    } else {
      await Token.updateOne({ phone: phone }, { token: newToken });
    }
    sendTokenToPhone(phone, newToken);
    res.send("인증번호 발송완료");
  }
});

app.patch("/tokens/phone", async (req, res) => {
  const { phone, token } = req.body;
  const isValid = phoneNumberValidation(phone);

  if (isValid) {
    const validation = await Token.findOne({ phone, token });
    if (validation === null) {
      res.send("false");
    } else {
      if (validation.token !== token) {
        res.send("false");
      } else {
        await Token.updateOne({ phone, token }, { isAuth: true });
        res.send("true");
      }
    }
  }
});

mongoose.connect("mongodb://my-database:27017/Tokens");
app.listen(port, () => {
  console.log(`example app listening on port ${port}`);
});
