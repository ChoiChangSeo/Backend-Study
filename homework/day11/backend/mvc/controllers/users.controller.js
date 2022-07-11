import { createBoardAPI } from "../../cheerio.js";
import { UserService } from "./services/userService.js";

export class Users {
  signUp = async (req, res) => {
    const userService = new UserService(req.body);
    // 이메일 확인 코드
    const emailValid = userService.checkValidationEmail();
    const auth = await userService.checkAuthPhone();

    if (auth || emailValid) {
      const result = await createBoardAPI(req.body.prefer);
      const changePersonal = await userService.personalToSecret();
      const userServic = new UserService(req.body, changePersonal, result);
      const saveId = await userServic.saveUserInfo();
      const result1 = await userService.sendUserMail();
      res.send(saveId);
    }
  };

  usersInfo = async (req, res) => {
    const userService = new UserService();
    const result = await userService.usersInfo();
    res.send(result);
  };
}
