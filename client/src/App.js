import './App.css';
import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import PokeBuff from './components/PokeBuff';
import Footer from './components/Footer';

const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

// initializes the app and will always set the footer at the bottom of the page
function App () {

  return (

    <ApolloProvider client={client}>

      <div className='flex-col justify-start h-screen'>
        <Header />

        <div>
          <Home />
        </div>

        <Footer />
      </div>

    </ApolloProvider>

  );
} 


export default App;
