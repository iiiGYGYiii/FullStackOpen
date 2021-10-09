import { pagesArray } from "../../utils/pages.utils";

import "./Menu.styles.css";

import { Button } from "..";

export default function Menu({ setPage }) {
  const handleClick = (page) => () => {
    setPage(page);
  };
  return (
    <header>
      {pagesArray.map((page) => (
        <Button key={page} handleClick={handleClick(page)} pageName={page} />
      ))}
    </header>
  );
}
