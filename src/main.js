import { createApp } from 'vue'
import App from './App.vue'
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client/core'
import gql from 'graphql-tag'

const httpLink = createHttpLink({
  uri: 'http://localhost:4000/',
})

const cache = new InMemoryCache()

const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
})

apolloClient
  .query({
    query: gql`
      query GetUsers {
        users {
          id
          name
          email
        }
      }
    `,
  })
  .then((result) => console.log(result))

createApp(App).mount('#app')
