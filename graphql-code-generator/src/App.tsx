import { useEffect, useState } from "react";
import { ApolloClient, ApolloProvider, NormalizedCacheObject } from "@apollo/client";

import createApolloClient from "./app/services/appoloClientServices";

import Home from "./app/main/screens/Home";

function App() {
  const [client, setClient] = useState<ApolloClient<NormalizedCacheObject>>();

  useEffect(() => {
    const init = async () => {
      setClient(await createApolloClient());
    };
    init();
  }, []);

  if (!client)
    return (
      <div>client not found</div>
    );

  return (
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>
  );
}

export default App;
