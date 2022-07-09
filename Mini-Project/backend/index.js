import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import {
  createToken,
  phoneNumberValidation,
  sendTokenToPhone,
} from "./phone.js";
import { Token } from "./models/tokens.model.js";
import { User } from "./models/user.model.js";
import { Starbucks } from "./models/starbuck.model.js";
import { options } from "./swagger/config.js";
import { createBoardAPI } from "./cheerio.js";
import {
  checkValidationEmail,
  getWelcomeTemplate,
  sendWelcomeToEmail,
} from "./welcome.js";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";

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

const personalToSecret = (personal) => {
  const result = personal.split("");
  result.splice(8, 13, "******");
  const last = result.join("");
  return last;
};

app.post("/users", async (req, res) => {
  const { name, personal, phone, prefer, email, password } = req.body;
  if (!name || !personal || !phone || !prefer || !email || !password) {
    return res.send("입력정보를 확인해주세요");
  }
  const emailValid = checkValidationEmail(email);
  const auth = await Token.findOne({ phone });

  if (auth.isAuth || emailValid) {
    const result = await createBoardAPI(prefer);
    const changePersonal = personalToSecret(personal);
    req.body.prefer = changePersonal;
    new User({
      ...req.body,
      og: {
        title: result.title,
        image: result.image,
        description: result.description,
      },
    }).save();
    const template = getWelcomeTemplate(req.body);
    sendWelcomeToEmail(email, template, name);
    const id = await User.findOne({ phone });
    res.send(id?.id);
  }
});

app.get("/users", async (req, res) => {
  const result = await User.find();
  res.send(result);
});

app.get("/starbucks", async (req, res) => {
  const result = await Starbucks.find();
  res.send(result);
});

mongoose.connect("mongodb://my-database:27017/mini-project");
app.listen(port, () => {
  console.log(`example app listening on port ${port}`);
});
