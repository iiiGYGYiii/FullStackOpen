import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const SERVER_URI = "http://localhost:4000";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: SERVER_URI,
  }),
});

export default client;
