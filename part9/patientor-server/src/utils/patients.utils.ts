import { Gender, NewPatient } from "../types/patients.types";
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const toNewPatient = (potentialPatient: any): NewPatient => {
  const newPatient: NewPatient = {
    name: parseString(potentialPatient.name),
    dateOfBirth: parseDate(potentialPatient.dateOfBirth),
    ssn: parseString(potentialPatient.ssn),
    gender: parseGender(potentialPatient.gender),
    occupation: parseString(potentialPatient.occupation),
  };
  return newPatient;
};
