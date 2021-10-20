import { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../../logic/graphql/queries/queries";
import { Field } from "..";

const initialFormState = {
  username: "",
  password: "",
};

const LoginForm = ({ setToken, setError, setPage }) => {
  const [loginForm, setLoginForm] = useState(initialFormState);
  const [login, result] = useMutation(LOGIN, {
    onError: (error) => {
      setError(error.graphQLErrors[0].message);
      setTimeout(() => setError(null), 1500);
    },
  });

  useEffect(() => {
    if (result.data) {
      const token = result.data.login.value;
      setToken(token);
      localStorage.setItem("library-gql-token", token);
      setPage("Books");
    }
  }, [result.data]);

  const handleFieldChange = ({ target }) =>
    setLoginForm((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  const handleSubmit = (e) => {
    e.preventDefault();
    login({ variables: loginForm });
    setLoginForm(initialFormState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="username"
        value={loginForm.username}
        handleChange={handleFieldChange}
      />
      <Field
        name="password"
        value={loginForm.password}
        handleChange={handleFieldChange}
        type="password"
      />
      <input type="submit" value="LOGIN" />
    </form>
  );
};

export default LoginForm;
