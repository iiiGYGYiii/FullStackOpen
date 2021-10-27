import {
  Entries,
  Entry,
  Gender,
  NewPatient,
  NewPatientFields,
  Patient,
} from "../types/patients.types";
import { parseString, parseDate, isString } from "./global.utils";

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
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    entries: potentialPatient.entries as Entries,
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

// Define special omit for unions
type UnionOmit<T, K extends string | number | symbol> = T extends unknown
  ? Omit<T, K>
  : never;
// Define Entry without the 'id' property
export type EntryWithoutId = UnionOmit<Entry, "id">;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const verifyBaseEntry = (obj: any): boolean => {
  const arr = ["type", "description", "date", "specialist"];
  const isEntry: boolean = arr.reduce(
    (acc: boolean, prop) => prop in obj && acc,
    true
  );
  if (isEntry) return true;
  return false;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const verifyHealthCheckEntry = (obj: any): boolean => {
  if (verifyBaseEntry(obj) && "healthCheckRating" in obj) return true;
  return false;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const verifyHospitalEntry = (obj: any): boolean => {
  const isEntry: boolean =
    "discharge" in obj &&
    "date" in obj.discharge &&
    "criteria" in obj.discharge;
  if (verifyBaseEntry(obj) && isEntry) return true;
  return false;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const verifyOccupationalEntry = (obj: any): boolean => {
  if (verifyBaseEntry(obj) && "employerName" in obj) return true;
  return false;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const verifyEntry = (entry: any): boolean => {
  switch (entry.type) {
    case "HealthCheck":
      return verifyHealthCheckEntry(entry);
    case "Hospital":
      return verifyHospitalEntry(entry);
    case "OccupationalHealthcare":
      return verifyOccupationalEntry(entry);
    default:
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      return false;
  }
};
