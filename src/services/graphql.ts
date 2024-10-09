import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_API_URL, // Defina esta URL nas variáveis de ambiente
  headers: {
    "x-api-key": process.env.REACT_APP_API_KEY, // Defina a chave API
  },
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      {/* Componentes da sua aplicação */}
    </ApolloProvider>
  );
}

export default App;
