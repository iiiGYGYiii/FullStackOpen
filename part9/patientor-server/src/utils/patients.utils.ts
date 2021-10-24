import {
  Gender,
  NewPatient,
  NewPatientFields,
  Patient,
} from "../types/patients.types";
import {
  parseString,
  parseDate,
  isString,
  parseArrayOfStings,
} from "./global.utils";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isGender = (gender: any): gender is Gender => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  return Object.values(Gender).includes(gender);
};

const parseGender = (gender: unknown): Gender => {
  if (!gender || !isString(gender) || !isGender(gender))
    throw new Error("Incorrect or missing gender.");
  return gender;
};

export const toNewPatient = (
  potentialPatient: NewPatientFields
): NewPatient => {
  const newPatient: NewPatient = {
    name: parseString(potentialPatient.name),
    dateOfBirth: parseDate(potentialPatient.dateOfBirth),
    ssn: parseString(potentialPatient.ssn),
    gender: parseGender(potentialPatient.gender),
    occupation: parseString(potentialPatient.occupation),
    entries: parseArrayOfStings(potentialPatient.entries),
  };
  return newPatient;
};

export const toPatient = (patient: Omit<Patient, "entries">): Patient => {
  if (!isGender(patient.gender)) throw new Error("bro wtf");
  return {
    ...patient,
    gender: patient.gender,
    entries: [],
  };
};
