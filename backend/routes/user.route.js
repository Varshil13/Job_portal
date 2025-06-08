import express from "express";
import { singleUpload } from "../middlewares/multer.js";
import { login, logout, register, updateProfile } from "../controllers/user.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";
const userRouter = express.Router();


userRouter.route("/register").post(singleUpload,register);
userRouter.route("/login").post(login);
userRouter.route("/logout").get(logout);
userRouter.route("/profile/update").post(isAuthenticated,updateProfile);


export default userRouter;