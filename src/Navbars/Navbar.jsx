import React from 'react';
import "./Navbar.css";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';


const Navb = () => {
  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home"><h3 style={{ color: '#003049457b9d', fontFamily: 'unset' }}>Doodle Institute</h3></Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Button variant="primary">Sign up</Button>{' '}
          </Navbar.Collapse>
        </Container>
      </Navbar>



    </>
  )
}

export default Navb;
