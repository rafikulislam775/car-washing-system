import express from "express";
import { signUpControllers } from "./userSignUp.controller";
const router = express.Router();

router.post("/", signUpControllers.signUpUser);

export const signUpRouter = router;
