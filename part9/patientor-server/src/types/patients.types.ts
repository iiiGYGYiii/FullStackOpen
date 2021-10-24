export enum Gender {
  Male = "male",
  Female = "female",
  Other = "other",
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Entry {}

export interface Patient {
  id: string;
  name: string;
  dateOfBirth: string;
  ssn: string;
  gender: Gender;
  occupation: string;
  entries: Entries;
}

type Entries = Entry[];

export type Patients = Patient[];

export type NonSensitivePatient = Omit<Patient, "ssn" | "entries">;

export type NonSensitivePatients = NonSensitivePatient[];

export type NewPatient = Omit<Patient, "id">;

export type NewPatientFields = {
  name: unknown;
  dateOfBirth: unknown;
  ssn: unknown;
  gender: unknown;
  occupation: unknown;
  entries: unknown;
};
