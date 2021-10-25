import axios from "axios";
import { useState, useEffect } from "react";
import { apiBaseUrl } from "../constants";
import { useStateValue, updateDiagnosisCodes } from "../state";
import { Diagnosis } from "../types";

export const useDiagnosisCode = (code: string): Diagnosis | undefined => {
  const [diagnosis, setDiagnosis] = useState<Diagnosis | undefined>();
  const [state, dispatch] = useStateValue();

  useEffect(() => {
    const fetchCodeDescription = async (code: string): Promise<void> => {
      if (!state.diagnosisCodes.map((d) => d.code).includes(code)) {
        try {
          const { data: diagnosisFetched, status } = await axios.get<
            Diagnosis | undefined
          >(`${apiBaseUrl}/diagnoses/${code}`);
          if (!diagnosisFetched || status === 400) return;
          setDiagnosis(diagnosisFetched);
          dispatch(updateDiagnosisCodes(diagnosisFetched));
          return;
        } catch (error) {
          console.error("ups! xd");
        }
      }
      setDiagnosis(state.diagnosisCodes.find((d) => d.code === code));
    };
    fetchCodeDescription(code);
  }, []);

  return diagnosis;
};
