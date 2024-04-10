import React from 'react';
import Navbar from './Navbars/Navbar.jsx';
import Body from './Body/Body.jsx';
import Details from './Details/Details.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



let topDescription = "Generate more leads with a professional landing page!";
let bottomDescription = "Ready to get started? Sign up now!";

let detailsObj = {
  image1: "https://img.icons8.com/?size=50&id=OODqBWCdRF8o&format=png",
  image2: "https://img.icons8.com/?size=80&id=qESJIxuYVMmY&format=png",
  image3: "https://img.icons8.com/?size=80&id=FnTmHRua3mU3&format=png",
  title1: "BootStrap",
  title2: "React",
  title3: "DJango",
  Descrip1: "This theme will look great on any device, no matter the size!",
  Descrip2: "Featuring the latest build of the new Bootstrap 5 framework!",
  Descrip3: "Ready to use with your own content, or customize the source files!"

}



let details_bottom = {
  Head: "Our Mentors...",
  image1: "https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/testimonials-1.jpg",
  image2: "https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/testimonials-2.jpg",
  image3: "https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/testimonials-3.jpg",
  title1: "Margaret E.",
  title2: "Fred S.",
  title3: "Sarah W.",
  Descrip1: "Passionate about nurturing talent and guiding students towards success.",
  Descrip2: "Committed to fostering a supportive learning environment and empowering students to achieve their goals.",
  Descrip3: "Dedicated to providing personalized mentorship and helping students unleash their full potential."

}

function App() {

  return (
    <>
      <Navbar />
      <Body Description={topDescription} />
      <Details {...detailsObj} />
      <Details {...details_bottom} />
      <Body Description={bottomDescription} />

    </>
  )
}

export default App

