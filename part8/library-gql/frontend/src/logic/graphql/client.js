import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

import { setContext } from "@apollo/client/link/context";

const SERVER_URI = "http://localhost:4000";

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("library-gql-token");
  return {
    headers: {
      ...headers,
      authorization: token ? `bearer ${token}` : null,
    },
  };
});

const httpLink = new HttpLink({ uri: SERVER_URI });

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
});

export default client;
