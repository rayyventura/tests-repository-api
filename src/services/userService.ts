import { User } from "@prisma/client";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import userRepository from "../repositories/userRepository.js";
dotenv.config();

export type UserData = Omit<User, "id">;
async function signUp(UserData: UserData) {
  const existingUser = await userRepository.findByEmail(UserData.email);
  if (existingUser) throw { type: "conflict", message: "Email already in use" };

  const hashedPassword = bcrypt.hashSync(UserData.password, 12);

  await userRepository.insert({ ...UserData, password: hashedPassword });
}

async function findById(id: number) {
  const user = await userRepository.findById(id);
  if (!user) throw { type: "not_found", message: "Inexistent user" };

  delete user.password;
  return user;
}

async function signIn({ email, password }: UserData) {
  const user = await userRepository.findByEmail(email);
  if (!user) throw { type: "unauthorized", message: "Inexistent user" };
  const isPasswordValid = bcrypt.compareSync(password, user.password);
  if (!isPasswordValid)
    throw { type: "unauthorized", message: "Invalid credentials" };

  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
    expiresIn: 50000,
  });
  delete user.password;
  return { token, user };
}

export default {
  signUp,
  signIn,
  findById,
};
