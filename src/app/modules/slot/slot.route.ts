import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { slotsValidation } from "./slot.validation";
import { slotControllers } from "./slot.controller";

const router = express.Router();

router.post(
  "/services/slots",
  validateRequest(slotsValidation.slotsValidationSchema),
  slotControllers.createSlot
);

export const slotsRoute = router;
