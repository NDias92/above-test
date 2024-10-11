// src/apolloClient.ts
import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloLink,
} from "@apollo/client";

const httpLink = new HttpLink({
  uri: process.env.REACT_APP_GRAPHQL_API,
});

const authLink = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      "x-api-key": process.env.REACT_APP_API_KEY || "", // Adiciona a chave da API nos headers
    },
  });
  return forward(operation);
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
