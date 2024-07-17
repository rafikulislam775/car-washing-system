import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { slotsValidation } from "./slot.validation";
import { slotControllers } from "./slot.controller";
import auth from "../../middlewares/auth";
import { UserRole } from "../userSignUp/userSignUp.constant";

const router = express.Router();

router.post(
  "/services/slots",
  auth(UserRole.admin),
  validateRequest(slotsValidation.slotsValidationSchema),
  slotControllers.createSlot
);
//get all slots
router.get("/slots/availability", slotControllers.getAvailability);
export const slotsRoute = router;

