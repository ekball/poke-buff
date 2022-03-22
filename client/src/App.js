import './App.css';
import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Login from './pages/Login';
import SingleReaction from './pages/SingleReaction';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import Dex from './pages/Dex';
import Releases from './pages/Releases';
import Home from './pages/Home';
import NoMatch from './pages/NoMatch';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

// initializes the app and will always set the footer at the bottom of the page
function App () {

  return (

    <ApolloProvider client={client}>

      <Router>

        <div className='flex-col justify-start h-screen'>
          <Header />

          <div className="">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/profile/:username?" component={Profile} />
              <Route exact path="/reaction/:id" component={SingleReaction} />
              <Route exact path="/dex" component={Dex} />
              <Route exact path="/releases" component={Releases} />
              <Route component={NoMatch}/>
            </Switch>
          </div>

          <Footer />
        </div>

      </Router>

    </ApolloProvider>

  );
} 


export default App;
