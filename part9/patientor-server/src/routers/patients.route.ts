import { v1 as uuid } from "uuid";

import {
  addPatient,
  getNonSensitivePatients,
} from "../services/patientsService";

import { Router } from "express";
import { toNewPatient } from "../utils/patients.utils";
import { Patient } from "../types/patients.types";
import { parseString } from "../utils/global.utils";
const patientsRouter = Router();

patientsRouter
  .route("/")
  .get((_req, res) => {
    res.send(getNonSensitivePatients());
  })
  .post((req, res) => {
    const newPatient = toNewPatient(req.body) as Patient;
    newPatient.id = parseString(uuid());
    addPatient(newPatient);
    res.json(newPatient).end();
  });

export default patientsRouter;
