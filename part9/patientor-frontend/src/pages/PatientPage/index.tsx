import { useParams } from "react-router";
import {
  Container,
  Icon,
  Message,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from "semantic-ui-react";
import DisplayEntry from "../../components/DisplayEntry";
import { usePatient } from "../../services/patient.service";

const PatientPage = () => {
  const { patientId } = useParams<{ patientId: string }>();
  const patient = usePatient(patientId);
  if (!patient) return <h3>No patient found!</h3>;
  return (
    <Container>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>ID</TableHeaderCell>
            <TableHeaderCell>NAME</TableHeaderCell>
            <TableHeaderCell>OCCUPATION</TableHeaderCell>
            <TableHeaderCell>GENDER</TableHeaderCell>
            <TableHeaderCell>SSN</TableHeaderCell>
            <TableHeaderCell>DATE OF BIRTH</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>{patient.id}</TableCell>
            <TableCell>{patient.name}</TableCell>
            <TableCell>{patient.occupation}</TableCell>
            <TableCell>
              <Icon name={patient.gender === "male" ? "mars" : "venus"} />
            </TableCell>
            <TableCell>{patient.ssn || "Not Found"}</TableCell>
            <TableCell>{patient.dateOfBirth || "Not Found"}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Container>
        {patient.entries.length ? (
          patient.entries.map((p) => <DisplayEntry key={p.date} entry={p} />)
        ) : (
          <Message color="red">No entries found.</Message>
        )}
      </Container>
    </Container>
  );
};

export default PatientPage;
