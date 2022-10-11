import { ApolloClient, from, HttpLink, InMemoryCache } from '@apollo/client';
import { onError } from '@apollo/client/link/error';

const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
        graphQLErrors.forEach(({ message, locations, path }) =>
            console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
        );
    }

    if (networkError) {
        console.log(`[Network error]: ${networkError}`);
    }
});

const httpLink = new HttpLink({
    uri: `${process.env.NEXT_PUBLIC_STRAPI_URL}/graphql`
});

const defaultOptions =
    process.env.NODE_ENV === 'development'
        ? {
              watchQuery: {
                  fetchPolicy: 'no-cache',
                  errorPolicy: 'ignore'
              },
              query: {
                  fetchPolicy: 'no-cache',
                  errorPolicy: 'all'
              }
          }
        : undefined;

const client = new ApolloClient({
    link: from([errorLink, httpLink]),
    cache: new InMemoryCache(),
    defaultOptions
});

export default client;
