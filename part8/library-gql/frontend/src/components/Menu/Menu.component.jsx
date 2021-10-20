import { pagesArray } from "../../utils/pages.utils";

import "./Menu.styles.css";

import { Button } from "..";
import { useApolloClient } from "@apollo/client";

export default function Menu({ setPage, token, setToken }) {
  const client = useApolloClient();
  const handleClick = (page) => () => {
    setPage(page);
  };
  const logOut = () => {
    setToken(null);
    localStorage.clear();
    client.clearStore();
  };
  return (
    <header>
      {pagesArray.map((page) => {
        if (page !== "Add")
          return (
            <Button
              key={page}
              handleClick={handleClick(page)}
              pageName={page}
            />
          );
        if (token)
          return (
            <Button
              key={page}
              handleClick={handleClick(page)}
              pageName={page}
            />
          );
        return null;
      })}
      {token ? (
        <>
          <Button
            handleClick={handleClick("recommended")}
            pageName="Recommended"
          />
          <Button handleClick={logOut} pageName="LogOut" />
        </>
      ) : (
        <Button handleClick={handleClick("login")} pageName="login" />
      )}
    </header>
  );
}
