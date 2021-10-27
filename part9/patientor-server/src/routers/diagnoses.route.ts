import { Router } from "express";
import { getDiagnoses, getDiagnosisByCode } from "../services/diagnosesService";

const diagnoseRouter = Router();

diagnoseRouter.route("/").get((_req, res) => {
  res.send(getDiagnoses());
});

diagnoseRouter.route("/:code").get((req, res) => {
  const { code } = req.params;

  const diagnosis = getDiagnosisByCode(code);
  if (!diagnosis)
    return res.status(404).json({ error: "Diagnosis not found" }).end();
  res.json(diagnosis).end();
});

export default diagnoseRouter;
