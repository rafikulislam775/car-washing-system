import express from "express";

import validateRequest from "../../middlewares/validateRequest";
import { serviceValidations } from "./services.validation";
import { servicesControllers } from "./servicesController";
import auth from "../../middlewares/auth";
import { UserRole } from "../userSignUp/userSignUp.constant";
const router = express.Router();

router.post(
  "/",
  auth(UserRole.admin),
  validateRequest(serviceValidations.serviceValidationSchema),
  servicesControllers.createServices
);
router.get("/", servicesControllers.findAllServices);
//get single services by id
router.get("/:id", servicesControllers.findSingleServices);
//update single services
router.patch(
  "/:id",
  auth(UserRole.admin),
  validateRequest(serviceValidations.UpdateServiceValidationSchema),
  servicesControllers.updateSingleServices
);
//delete single services by id
router.delete(
  "/:id",
  auth(UserRole.admin),
  servicesControllers.deleteSingleServices
);
export const servicesRoute = router;
