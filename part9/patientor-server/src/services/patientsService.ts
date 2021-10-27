import { v1 as uuid } from "uuid";

import patientsData from "../data/patients.data";

import {
  Patients,
  NonSensitivePatients,
  Patient,
  Entry,
} from "../types/patients.types";
import { verifyEntry } from "../utils/patients.utils";

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

export const addEntryToPatientWithId = (
  id: Patient["id"],
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  entry: any
): Patient => {
  const foundPatient: Patient | undefined = fetchPatientById(id);
  if (!foundPatient) throw new Error("Patient not found");
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  if (!verifyEntry(entry)) throw new Error("Invalid entry");
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const newEntry: Entry = {
    ...entry,
    id: uuid(),
  };
  foundPatient.entries = [...foundPatient.entries, newEntry];
  patients = patients.map((patient) =>
    patient.id === foundPatient.id ? foundPatient : patient
  );
  return foundPatient;
};
