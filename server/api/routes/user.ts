import { Router } from "express";
import UserController from "../controller/UserController";

const userRouter = Router();
const controller = new UserController();

userRouter.post("/register", controller.register);
userRouter.post("/login", controller.login);

export default userRouter;