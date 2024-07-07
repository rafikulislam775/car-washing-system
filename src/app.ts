// const express = require("express");
// convert it to import syntax to express
import express, { Application, Request, Response } from "express";
import router from "./app/routes";
import globalErrorHandler from "./app/middlewares/globalErrorhandler";
import notFound from "./app/middlewares/notFound";

const app: Application = express();
//use parsers to get body data
app.use(express.json());

// application routes
app.use("/api", router);
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});
//global error handler need 4 parameters
app.use(globalErrorHandler);
//not found route
app.use(notFound);
export default app;
