import { Token } from "../../../models/tokens.model.js";
import { User } from "../../../models/user.model.js";
import { getWelcomeTemplate, sendWelcomeToEmail } from "../../../welcome.js";

export class UserService {
  obj = {};
  result = {};
  changePersonal = "";
  constructor(obj, changePersonal, result) {
    this.obj = obj;
    this.changePersonal = changePersonal;
    this.result = result;
  }
  checkValidationEmail = () => {
    if (this.obj.email === undefined || !this.obj.email.includes("@")) {
      console.log("올바른 이메일이 아닙니다.");
      return false;
    } else {
      return true;
    }
  };
  checkAuthPhone = async () => {
    const auth = await Token.findOne({ phone: this.obj.phone });
    if (auth.isAuth) {
      return true;
    } else {
      return false;
    }
  };
  personalToSecret = () => {
    const result = this.obj.personal.split("");
    result.splice(8, 13, "******");
    const last = result.join("");
    return last;
  };
  saveUserInfo = async () => {
    const saveId = await new User({
      name: this.obj.name,
      email: this.obj.email,
      personal: this.changePersonal,
      prefer: this.obj.prefer,
      phone: this.obj.phone,
      password: this.obj.password,
      og: {
        title: this.result.title,
        image: this.result.image,
        description: this.result.description,
      },
    }).save();
    return saveId._id;
  };
  sendUserMail = async () => {
    const emailForm = getWelcomeTemplate(this.obj);
    await sendWelcomeToEmail(this.obj.email, emailForm, this.obj.name);
  };
  usersInfo = async () => {
    const result = await User.find();
    return result;
  };
}
