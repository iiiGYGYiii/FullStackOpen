import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router";
import {
  Button,
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
import AddEntryModal from "../../AddEntryModal";
import DisplayEntry from "../../components/DisplayEntry";
import { apiBaseUrl } from "../../constants";
import { usePatient } from "../../services/patient.service";
import { NewEntry, Patient } from "../../types";

const PatientPage = () => {
  const { patientId } = useParams<{ patientId: string }>();
  const [patient, setPatient] = usePatient(patientId);

  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  if (!patient) return <h3>No patient found!</h3>;

  const openModal = (): void => setModalOpen(true);

  const closeModal = (): void => {
    setModalOpen(false);
    setError(null);
  };

  const submitNewEntry = async (newEntry: NewEntry) => {
    try {
      const { data: updatedPatient } = await axios.post<Patient>(
        `${apiBaseUrl}/patients/${patientId}/entry`,
        newEntry
      );
      closeModal();
      setPatient(updatedPatient);
    } catch (e) {
      if (e instanceof Error) setError(e.message);
    }
  };

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
      <AddEntryModal
        modalOpen={modalOpen}
        onSubmit={submitNewEntry}
        error={error}
        onClose={closeModal}
      />
      <Button onClick={() => openModal()}>Add New entry</Button>
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
