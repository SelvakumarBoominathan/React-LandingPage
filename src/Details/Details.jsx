import React from 'react';
import './Details.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
// import CardGroup from 'react-bootstrap/CardGroup';

const Details = (props) => {
  return (
    <Container className='parent-container'>
      <h3 style={{ textAlign: 'center' }}>{props.Head}</h3>
      <Row>
        <Col xs={6} md={4}>
          <Card className="border-0">
            <Image className='rounded-Image' variant="top" src={props.image1} roundedCircle />
            <Card.Body>
              <Card.Title>{props.title1}</Card.Title>
              <Card.Text>
                {props.Descrip1}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm xs={6} md={4}>
          <Card className="border-0">
            <Image className='rounded-Image' variant="top" src={props.image2} roundedCircle />
            <Card.Body>
              <Card.Title>{props.title2}</Card.Title>
              <Card.Text>
                {props.Descrip2}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm xs={6} md={4}>
          <Card className="border-0">
            <Image className='rounded-Image' variant="top" src={props.image3} roundedCircle />
            <Card.Body>
              <Card.Title>{props.title3}</Card.Title>
              <Card.Text>
                {props.Descrip3}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Details
