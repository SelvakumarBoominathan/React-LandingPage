import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './Profile.css'


const Profile = (props) => {
  return (
    <Row xs={1} md={2} className="g-0 container">
      {Array.from({ length: 6 }).map((_, idx) => (
        <Col key={idx} className='Column'>
          <Card.Img variant="top" src={props[idx].image} style={{ backgroundImage: `url(${props[idx].image})` }} />
          <h3>{props[idx].title}</h3>
          <p className='p-Tag'>{props[idx].description}</p>
        </Col>
      ))}
    </Row>
  )
}

export default Profile;
