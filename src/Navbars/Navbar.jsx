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
          <Navbar.Brand href="#home">React Landing Page</Navbar.Brand>
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
