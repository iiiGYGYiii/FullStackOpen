import patientsData from "../data/patients.data";

import {
  Patients,
  NonSensitivePatients,
  Patient,
} from "../types/patients.types";

let patients: Patients = patientsData;

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
