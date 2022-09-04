import { ApolloClient, from, HttpLink, InMemoryCache } from "@apollo/client";

const createApolloClient = () => {
    const cache = new InMemoryCache();

    return new ApolloClient({
        link: from([
            new HttpLink({
                uri: "http://localhost:8080/v1/graphql",
                headers: {
                    "x-hasura-admin-secret": "1"
                }
            }),
        ]),
        cache,
    });
};

export default createApolloClient;
