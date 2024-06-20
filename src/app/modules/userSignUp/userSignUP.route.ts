import express from "express";
import { signUpControllers } from "./userSignUp.controller";

import validateRequest from "../../middlewares/validateRequest";
import { userSignUpValidations } from "./userSignUp.validation";
const router = express.Router();

router.post(
  "/",
  validateRequest(userSignUpValidations.userSignUpValidationSchema),
  signUpControllers.signUpUser
);

export const signUpRouter = router;
