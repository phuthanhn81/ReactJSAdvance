import { ApolloClient, from, HttpLink, InMemoryCache } from "@apollo/client";

const createApolloClient = () => {
    const cache = new InMemoryCache();

    return new ApolloClient({
        link: from([
            new HttpLink({
                uri: import.meta.env.VITE_ECOMMERCE_ENDPOINT,
                headers: {
                    "x-hasura-admin-secret": import.meta.env.VITE_ECOMMERCE_SECRET
                }
            }),
        ]),
        cache,
    });
};

export default createApolloClient;
