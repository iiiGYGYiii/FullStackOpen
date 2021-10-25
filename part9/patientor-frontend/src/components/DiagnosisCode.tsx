import { Header, Menu } from "semantic-ui-react";
import { useDiagnosisCode } from "../services/diagnosis.service";

const DiagnosisCode = ({ code }: { code: string }) => {
  const diagnosis = useDiagnosisCode(code);
  return diagnosis ? (
    <Menu.Item>
      <Header size="medium" as="h1">
        {diagnosis.code}
      </Header>
      <p>{diagnosis.name}</p>
    </Menu.Item>
  ) : (
    <p>Loading...</p>
  );
};

export default DiagnosisCode;
