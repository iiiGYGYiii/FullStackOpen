export enum Gender {
  Male = "male",
  Female = "female",
  Other = "other",
}

export interface Patient {
  id: string;
  name: string;
  dateOfBirth: string;
  ssn: string;
  gender: Gender;
  occupation: string;
}

export type Patients = Patient[];

export type NonSensitivePatient = Omit<Patient, "ssn">;

export type NonSensitivePatients = NonSensitivePatient[];

export type NewPatient = Omit<Patient, "id">;

export type NewPatientFields = {
  name: unknown;
  dateOfBirth: unknown;
  ssn: unknown;
  gender: unknown;
  occupation: unknown;
};
