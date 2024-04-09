import React from 'react';
import Navbar from './Navbars/Navbar.jsx';
import Body from './Body/Body.jsx';
import Details from './Details/Details.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



let topDescription = "Generate more leads with a professional landing page!";
let bottomDescription = "Ready to get started? Sign up now!";

let detailsObj = {
  image1: "https://cdn-icons-png.freepik.com/256/12282/12282505.png",
  image2: "https://cdn-icons-png.freepik.com/256/12282/12282489.png",
  image3: "https://cdn-icons-png.freepik.com/256/12282/12282297.png",
  title1: "BootStrap",
  title2: "React",
  title3: "DJango",
  Descrip1: "This theme will look great on any device, no matter the size!",
  Descrip2: "Featuring the latest build of the new Bootstrap 5 framework!",
  Descrip3: "Ready to use with your own content, or customize the source files!"

}

function App() {

  return (
    <>
      <Navbar />
      <Body Description={topDescription} />
      <Details {...detailsObj} />
      <Body Description={bottomDescription} />

    </>
  )
}

export default App

