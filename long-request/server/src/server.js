import express from "express";
import { json, urlencoded } from "body-parser";
import morgan from "morgan";
import axios from "axios";

import config from "./config";

import cors from "cors";
import settings from "./settings";
export const app = express();

app.disable("x-powered-by");
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan("dev"));

app.get("/api/jobs", async (req, res) => {
  const { data: jobs } = await axios.get(settings.services.jobsUrl);

  res.json(jobs);
});

export const start = () => {
  app.listen(config.port, () => {
    console.log(`REST API on http://localhost:${config.port}/api`);
  });
};
