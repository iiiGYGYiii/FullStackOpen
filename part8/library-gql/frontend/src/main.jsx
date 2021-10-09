import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/client";
import "./index.css";
import App from "./App";
import client from "./logic/graphql/client";

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
