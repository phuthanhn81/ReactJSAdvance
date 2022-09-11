import { useEffect, useState } from "react";
import {
  ApolloClient,
  NormalizedCacheObject,
  ApolloProvider,
} from "@apollo/client";

import createApolloClient from "./app/services/appoloClientServices";

import { AuthProvider } from "./contexts/AuthProvider";
import Home from "./app/main/screens/Home";

function App() {
  const [client, setClient] = useState<ApolloClient<NormalizedCacheObject>>();

  useEffect(() => {
    const init = async () => {
      setClient(await createApolloClient());
    };
    init();
  }, []);

  if (!client) return <div>client not found</div>;

  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <Home />
      </AuthProvider>
    </ApolloProvider>
  );
}

export default App;
