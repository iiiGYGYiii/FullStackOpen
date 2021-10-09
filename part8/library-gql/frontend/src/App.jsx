import { useState } from "react";
import { initialPageState, pages } from "./utils/pages.utils";
import "./App.css";

import { AddBookForm, Authors, Books, Menu } from "./components";

function App() {
  const [page, setPage] = useState(initialPageState);
  return (
    <div className="App">
      <Menu setPage={setPage} />
      {page === pages.authors ? (
        <Authors />
      ) : page === pages.books ? (
        <Books />
      ) : page === pages.add ? (
        <AddBookForm />
      ) : null}
    </div>
  );
}

export default App;
