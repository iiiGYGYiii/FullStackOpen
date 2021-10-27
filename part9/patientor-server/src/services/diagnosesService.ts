import diagnosesData from "../data/diagnoses.data.json";
import { Diagnose, Diagnoses } from "../types/diagnoses.types";

const diagnoses: Diagnoses = diagnosesData as Diagnoses;

export const getDiagnoses = (): Diagnoses => diagnoses;

export const getDiagnosisByCode = (code: string): Diagnose | undefined =>
  diagnoses ? diagnoses.find((diagnose) => diagnose.code === code) : undefined;
