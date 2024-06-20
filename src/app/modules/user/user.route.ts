import express from "express";
import { UserLoginController } from "./user.controller";

const router = express.Router();

router.post("/", UserLoginController.userLogin);

export const loginRouter = router;
