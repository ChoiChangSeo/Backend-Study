import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import {
  createToken,
  phoneNumberValidation,
  sendTokenToPhone,
} from "./phone.js";
import { Token } from "./models/tokens.model.js";
import { Starbucks } from "./models/starbuck.model.js";
import { options } from "./swagger/config.js";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import { Users } from "./mvc/controllers/users.controller.js";

dotenv.config();

const app = express();
const port = 3000;

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(options)));
app.use(express.json());
app.use(cors());
// 인증번호 전송 API
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

// 인증번호 확인 API
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

const users = new Users();

app.post("/users", users.signUp);

app.get("/users", users.usersInfo);

app.get("/starbucks", async (req, res) => {
  const result = await Starbucks.find();
  res.send(result);
});

mongoose.connect("mongodb://my-database:27017/mini-project");
app.listen(port, () => {
  console.log(`example app listening on port ${port}`);
});
