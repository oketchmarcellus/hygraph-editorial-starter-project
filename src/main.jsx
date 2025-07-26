import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import './index.css'
import App from './App.jsx'

// Create Apollo client with Vite environment variable
const client = new ApolloClient({
  uri: import.meta.env.VITE_HYGRAPHQL_ENDPOINT_URL, // Access the environment variable
  cache: new InMemoryCache(),
});

//Fetch data from the NEWS.org REST API
async function fetchFromRestAPI() {
  const response = await fetch(import.meta.env.VITE_NEWSDATA_DOT_IO_REST_API_URL, {
    method: 'GET', // or 'POST', depending on your API
    headers: {
      'Content-Type': 'application/json',
      // Add any other headers your API requires
    },
  });

  if (!response.ok) {
    throw new Error('News Network response was not ok')
  }

  return await response.json()
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </StrictMode>,
);