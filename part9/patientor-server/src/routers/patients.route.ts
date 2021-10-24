import { v1 as uuid } from "uuid";

import {
  addPatient,
  fetchPatientById,
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
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const newPatient = toNewPatient(req.body) as Patient;
    newPatient.id = parseString(uuid());
    addPatient(newPatient);
    res.json(newPatient).end();
  });

patientsRouter.route("/:id").get((req, res) => {
  const {
    params: { id },
  } = req;
  const patientFound: Patient | undefined = fetchPatientById(id);
  if (!patientFound) {
    return res
      .status(404)
      .json({
        error: "Patient not found",
      })
      .end();
  }
  return res.json(patientFound).end();
});

export default patientsRouter;
