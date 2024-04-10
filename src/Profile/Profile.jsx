import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Profile = () => {
  return (
    <Container>
      <Row>
        <Col sm={6}>sm=8</Col>
        <Col sm={6}>sm=4</Col>
      </Row>
      <Row>
        <Col sm={6}>sm=8</Col>
        <Col sm={6}>sm=4</Col>
      </Row>
      <Row>
        <Col sm={6}>sm=8</Col>
        <Col sm={6}>sm=4</Col>
      </Row>
    </Container>
  )
}

export default Profile
