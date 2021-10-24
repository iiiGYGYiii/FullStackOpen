import patientsData from "../data/patients.data.json";

import {
  Patients,
  NonSensitivePatients,
  Patient,
} from "../types/patients.types";
import { toPatient } from "../utils/patients.utils";

let patients: Patients = patientsData as Patients;
patients = patients.map(toPatient);
export const getPatients = (): Patients => patients;

export const getNonSensitivePatients = (): NonSensitivePatients =>
  patients.map(({ id, name, dateOfBirth, gender, occupation, entries }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
    entries,
  }));

export const addPatient = (patient: Patient): void => {
  patients = patients.concat(patient);
};

export const fetchPatientById = (id: string): Patient | undefined => {
  return patients.find((v) => v.id === id);
};
