import express from "express";

import validateRequest from "../../middlewares/validateRequest";
import { serviceValidations } from "./services.validation";
import { servicesControllers } from "./servicesController";
const router = express.Router();

router.post(
  "/services",
  validateRequest(serviceValidations.serviceValidationSchema),
  servicesControllers.createServices
);
router.get("/services", servicesControllers.findAllServices);

export const servicesRoute = router;
