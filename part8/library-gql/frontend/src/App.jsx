import { useState } from "react";
import { useSubscription } from "@apollo/client";
import { initialPageState, pages } from "./utils/pages.utils";
import { BOOK_ADDED } from "./logic/graphql/queries/queries";
import { onSubscriptionData } from "./logic/graphql/utils/index";

import "./App.css";

import {
  AddBookForm,
  Authors,
  Books,
  LoginForm,
  Menu,
  RecommendedSection,
} from "./components";

function App() {
  const [token, setToken] = useState(null);
  const [page, setPage] = useState(initialPageState);
  const [error, setError] = useState(null);

  useSubscription(BOOK_ADDED, {
    onSubscriptionData,
  });

  const notifyError = (error) => {
    setError(error);
    setTimeout(() => setError(null), 1500);
  };

  return (
    <div className="App">
      {error ? <h3>{error}</h3> : null}
      <Menu setPage={setPage} token={token} setToken={setToken} />
      {page === pages.authors ? (
        <Authors setError={notifyError} />
      ) : page === pages.books ? (
        <Books />
      ) : page === pages.add ? (
        <AddBookForm setError={notifyError} />
      ) : page === "login" ? (
        <div>
          <h2>Login</h2>
          <LoginForm
            setPage={setPage}
            setToken={setToken}
            setError={setError}
          />
        </div>
      ) : page === "recommended" ? (
        <RecommendedSection />
      ) : null}
    </div>
  );
}

export default App;
