// const express = require("express");
// convert it to import syntax to express
import express, { Application, Request, Response } from "express";
import router from "./app/routes";

const app: Application = express();
//use parsers to get body data
app.use(express.json());

// application routes
app.use("/api", router);
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
