import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <div className='main-container'>
      <div className='L-div'>
        <ul className='anchor-tags'>
          <li><a href=''>About</a></li>
          <li><a href=''>Contact</a></li>
          <li><a href=''>Terms of Use</a></li>
          <li><a href=''>Privacy Policy</a></li>
        </ul>
        <p className='paragraph'>© Your Website 2023. All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer;
