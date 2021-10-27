/* eslint-disable indent */
import { Header, Icon, Menu, Message } from "semantic-ui-react";
import { Entry, EntryType, HealthCheckRating } from "../types";
import DiagnosisCode from "./DiagnosisCode";

export const assertNever = (value: never): never => {
  throw new Error(
    `Unhandled discriminated union member: ${JSON.stringify(value)}`
  );
};

const HeartIcon: React.FC<{ healthCheckRating: HealthCheckRating }> = ({
  healthCheckRating,
}) => (
  <Icon
    name="heart"
    color={
      healthCheckRating === 0
        ? "green"
        : healthCheckRating === 1
        ? "yellow"
        : healthCheckRating === 2
        ? "orange"
        : "red"
    }
  />
);

const DisplayDiagnosis: React.FC<{ diagnosisCodes: string[] }> = ({
  diagnosisCodes,
}) => (
  <Menu vertical fluid>
    {diagnosisCodes ? (
      diagnosisCodes.map((code) => <DiagnosisCode key={code} code={code} />)
    ) : (
      <Message color="red">No diagnosis found.</Message>
    )}
  </Menu>
);

const MyHOC: React.FC<{ entry: Entry }> = ({ children, entry }) => (
  <Message>
    <Header as="h3">
      {entry.date} <i>{entry.specialist}</i>
    </Header>
    <Message color="blue">
      <p>{entry.description}</p>
      {children}
    </Message>
    {entry.diagnosisCodes ? (
      <DisplayDiagnosis diagnosisCodes={entry.diagnosisCodes} />
    ) : null}
  </Message>
);

const DisplayEntry = ({ entry }: { entry: Entry }) => {
  switch (entry.type) {
    case EntryType.HealthCheck:
      return (
        <MyHOC entry={entry}>
          <HeartIcon healthCheckRating={entry.healthCheckRating} />
        </MyHOC>
      );
    case EntryType.Hospital:
      return (
        <MyHOC entry={entry}>
          <Message color="green">
            <Header as="h4">Discharge</Header>
            <p>
              <span style={{ fontWeight: "bold" }}>
                {entry.discharge.date}:
              </span>{" "}
              {entry.discharge.criteria}
            </p>
          </Message>
        </MyHOC>
      );
    case EntryType.OccupationalHealthcare:
      return (
        <MyHOC entry={entry}>
          <Message color="orange">
            <p>
              <span style={{ fontWeight: "bold" }}>{entry.employerName}</span>{" "}
              {entry.sickLeave
                ? `Started on: ${entry.sickLeave.startDate}. Leave on: ${entry.sickLeave.endDate}`
                : null}
            </p>
          </Message>
        </MyHOC>
      );
    default:
      return assertNever(entry);
  }
};

export default DisplayEntry;
