/* eslint-disable indent */
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ALL_AUTHORS, EDIT_AUTHOR } from "../../logic/graphql/queries/queries";

import "./ChangeAuthorForm.styles.css";

import { Field, SelectAuthor } from "..";

const initialFormState = (allAuthors) => ({
  born: "",
  name: allAuthors[0],
});

export default function ChangeAuthorForm({ allAuthors, setError }) {
  const [changeAuthor] = useMutation(EDIT_AUTHOR, {
    refetchQueries: [{ query: ALL_AUTHORS }],
    onError: () => {
      setError("An error has happened. Please try again later");
    },
  });
  const [formValues, setFormValues] = useState(initialFormState(allAuthors));
  const handleChange = ({ target }) =>
    setFormValues((prevState) => ({ ...prevState, name: target.value }));
  const handleSubmit = (e) => {
    e.preventDefault();
    changeAuthor({
      variables: { name: formValues.name, born: parseInt(formValues.born) },
    });
    setFormValues(initialFormState(allAuthors));
  };
  const handleBornChange = ({ target }) =>
    setFormValues((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  return (
    <form onSubmit={handleSubmit}>
      <SelectAuthor
        handleChange={handleChange}
        allAuthors={allAuthors}
        formValues={formValues}
      />
      <Field
        name="born"
        value={formValues.born}
        handleChange={handleBornChange}
        type="number"
      />
      <input type="submit" value="Change Author" />
    </form>
  );
}
