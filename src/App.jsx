import React from 'react';
import Navbar from './Navbars/Navbar.jsx';
import Body from './Body/Body.jsx';
import Details from './Details/Details.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



let topDescription = "Generate more leads with a professional landing page!";
let bottomDescription = "Ready to get started? Sign up now!";

function App() {

  return (
    <>
      <Navbar />
      <Body Description={topDescription} />
      <Details />
      <Body Description={bottomDescription} />

    </>
  )
}

export default App

