import { Router } from "express";
import { loginUser, registerUser } from "../controllers/auth.js";

const authRouter = Router();

authRouter.post("/register", registerUser);
authRouter.post("/loginUser", loginUser);

export default authRouter;
