import React from 'react';
import Navbar from './Navbars/Navbar.jsx';
import Body from './Body/Body.jsx';
import Details from './Details/Details.jsx';
import Profile from './Profile/Profile.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer/Footer.jsx'
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

const Array = [

  {
    title: "Fully Responsive Design",
    description: "When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!",
    image: ""
  },
  {
    title: "",
    description: "",
    image: "https://images.alphacoders.com/133/1331849.png",
  },
  {
    title: "",
    description: "",
    image: "https://images7.alphacoders.com/122/1228014.png",

  },
  {
    title: "Updated For Bootstrap 5",
    description: "Newly improved, and full of great utility classes, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!",
    image: ""
  },
  {
    title: "Easy to Use & Customize",
    description: "Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!",
    image: ""
  },
  {
    title: "",
    description: "",
    image: "https://images7.alphacoders.com/133/1337390.png",

  },

]

function App() {

  return (
    <>
      <Navbar />
      <Body Description={topDescription} />
      <Details {...detailsObj} />
      <Profile {...Array} />
      <Details {...details_bottom} />
      <Body Description={bottomDescription} />
      <Footer />
    </>
  )
}

export default App

