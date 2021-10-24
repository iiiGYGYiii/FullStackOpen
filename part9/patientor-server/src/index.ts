import cors = require("cors");
import express from "express";
import morgan = require("morgan");

import { diagnoseRouter, patientsRouter } from "./routers";

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));

app.use("/api/diagnoses", diagnoseRouter);
app.use("/api/patients", patientsRouter);

app.route("/api/ping").get((_req, res) => {
  res.send("pong");
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on Port:${PORT}`));
