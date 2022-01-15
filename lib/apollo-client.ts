import { ApolloClient, InMemoryCache } from '@apollo/client'

const uri = 'https://api.thegraph.com/subgraphs/name/vince0656/brand-central'

const client = new ApolloClient({
  uri,
  cache: new InMemoryCache(),
})

export default client
