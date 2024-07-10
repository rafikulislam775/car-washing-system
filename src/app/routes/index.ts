import { Router } from "express";
import { signUpRouter } from "../modules/userSignUp/userSignUP.route";
import { AuthRouter } from "../modules/Auth/auth.route";
import { servicesRoute } from "../modules/services/service.route";
import { slotsRoute } from "../modules/slot/slot.route";

const router = Router();
const allRoutes = [
  {
    path: "/auth",
    route: signUpRouter,
  },
  {
    path: "/auth",
    route: AuthRouter,
  },
  {
    path: "/services",
    route: servicesRoute,
  },
  {
    path: "/",
    route: slotsRoute,
  },
];

allRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
