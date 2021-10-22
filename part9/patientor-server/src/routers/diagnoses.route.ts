import { Router } from "express";
import { getDiagnoses } from "../services/diagnosesService";

const diagnoseRouter = Router();

diagnoseRouter.route("/").get((_req, res) => {
  res.send(getDiagnoses());
});

export default diagnoseRouter;
