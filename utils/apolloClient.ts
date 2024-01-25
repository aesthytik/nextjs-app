/* eslint-disable import/no-extraneous-dependencies */
import { ApolloClient, InMemoryCache } from '@apollo/client';

import config from './config';

const ssrMode = typeof window === 'undefined';

const client = new ApolloClient({
  ssrMode,
  uri: config.graphQlUri,
  cache: new InMemoryCache(),
  connectToDevTools: true,
});

export default client;
