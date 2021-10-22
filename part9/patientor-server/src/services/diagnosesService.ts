import diagnosesData from "../data/diagnoses.data.json";
import { Diagnoses } from "../types/diagnoses.types";

const diagnoses: Diagnoses = diagnosesData as Diagnoses;

export const getDiagnoses = (): Diagnoses => diagnoses;
