import patientsData from "../data/patients.data.json";

import {
  Patients,
  NonSensitivePatients,
  Patient,
} from "../types/patients.types";

let patients: Patients = patientsData as Patients;

export const getPatients = (): Patients => patients;

export const getNonSensitivePatients = (): NonSensitivePatients =>
  patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
  }));

export const addPatient = (patient: Patient): void => {
  patients = patients.concat(patient);
};
