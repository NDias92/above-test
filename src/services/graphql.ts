// src/apolloClient.ts
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://qzdu2mazrzfr3pvzuv6z5txkji.appsync-api.us-east-1.amazonaws.com/graphql",
    headers: {
      "x-api-key": process.env.REACT_APP_GRAPHQL_API_KEY || "", // API Key para autenticação
    },
  }),
  cache: new InMemoryCache(),
});

export default client;
