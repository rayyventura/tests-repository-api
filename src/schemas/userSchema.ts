import Joi from "joi";
import { UserData } from "../services/userService.js";

const userSchema = Joi.object<UserData>({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

export default userSchema;
