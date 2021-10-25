import { State } from "./state";
import { Diagnosis, Patient } from "../types";

export type Action =
  | {
      type: "SET_PATIENT_LIST";
      payload: Patient[];
    }
  | {
      type: "ADD_PATIENT";
      payload: Patient;
    }
  | {
      type: "UPDATE_PATIENTS_FETCHED";
      payload: Patient;
    }
  | {
      type: "UPDATE_DIAGNOSIS_CODES";
      payload: Diagnosis;
    };

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_PATIENT_LIST":
      return {
        ...state,
        patients: {
          ...action.payload.reduce(
            (memo, patient) => ({ ...memo, [patient.id]: patient }),
            {}
          ),
          ...state.patients,
        },
      };
    case "ADD_PATIENT":
      return {
        ...state,
        patients: {
          ...state.patients,
          [action.payload.id]: action.payload,
        },
      };
    case "UPDATE_PATIENTS_FETCHED":
      return {
        ...state,
        patientsFetched: [...state.patientsFetched, action.payload],
      };
    case "UPDATE_DIAGNOSIS_CODES":
      return {
        ...state,
        diagnosisCodes: [...state.diagnosisCodes, action.payload],
      };
    default:
      return state;
  }
};

export const setPatientList = (payload: Patient[]): Action => ({
  type: "SET_PATIENT_LIST",
  payload,
});

export const addPatient = (payload: Patient): Action => ({
  type: "ADD_PATIENT",
  payload,
});

export const updatePatientsFetched = (payload: Patient): Action => ({
  type: "UPDATE_PATIENTS_FETCHED",
  payload,
});

export const updateDiagnosisCodes = (payload: Diagnosis): Action => ({
  type: "UPDATE_DIAGNOSIS_CODES",
  payload,
});
