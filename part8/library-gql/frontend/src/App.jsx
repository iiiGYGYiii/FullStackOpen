import { useState } from "react";
import { initialPageState, pages } from "./utils/pages.utils";
import "./App.css";

import { AddBookForm, Authors, Books, Menu } from "./components";

function App() {
  const [page, setPage] = useState(initialPageState);
  const [error, setError] = useState(null);
  const notifyError = (error) => {
    setError(error);
    setTimeout(() => setError(null), 1500);
  };
  return (
    <div className="App">
      {error ? <h3>{error}</h3> : null}
      <Menu setPage={setPage} />
      {page === pages.authors ? (
        <Authors setError={notifyError} />
      ) : page === pages.books ? (
        <Books />
      ) : page === pages.add ? (
        <AddBookForm setError={notifyError} />
      ) : null}
    </div>
  );
}

export default App;
