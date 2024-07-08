import express from "express";

import validateRequest from "../../middlewares/validateRequest";
import { serviceValidations } from "./services.validation";
import { servicesControllers } from "./servicesController";
const router = express.Router();

router.post(
  "/",
  validateRequest(serviceValidations.serviceValidationSchema),
  servicesControllers.createServices
);
router.get("/", servicesControllers.findAllServices);
//get single services by id
router.get("/:id", servicesControllers.findSingleServices);
//update single services
router.patch("/:id",validateRequest(serviceValidations.UpdateServiceValidationSchema),
   servicesControllers.updateSingleServices)
//delete single services by id 
router.delete("/:id", servicesControllers.deleteSingleServices)
export const servicesRoute = router;
