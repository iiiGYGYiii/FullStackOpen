import React, { useState, useEffect } from "react";
import axios from "axios";
import { Patient } from "../types";
import { apiBaseUrl } from "../constants";
import { updatePatientsFetched, useStateValue } from "../state";

export const usePatient = (
  id: string
): [
  Patient | undefined,
  React.Dispatch<React.SetStateAction<Patient | undefined>>
] => {
  const [patient, setPatient] = useState<Patient | undefined>();
  const [state, dispatch] = useStateValue();
  useEffect(() => {
    async function fetchAndSetPatientById(id: string) {
      if (state.patientsFetched.map((p) => p.id).includes(id))
        return setPatient(state.patientsFetched.find((p) => p.id === id));
      try {
        const { data: patientFetched } = await axios.get<Patient>(
          `${apiBaseUrl}/patients/${id}`
        );
        setPatient(patientFetched);
        dispatch(updatePatientsFetched(patientFetched));
      } catch (error) {
        console.log(error);
      }
    }
    fetchAndSetPatientById(id);
  }, []);
  return [patient, setPatient];
};
