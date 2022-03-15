import './App.css';
import React from 'react';
import PokeBuff from './components/PokeBuff';
import Header from './components/Header';
import Footer from './components/Footer';


// initializes the app and will always set the footer at the bottom of the page
function App () {

  return (
    <div >
      <PokeBuff />

      <Footer />
    </div>
  );
} 


export default App;
