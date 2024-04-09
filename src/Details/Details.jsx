import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './Details.css';

const Details = (props) => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Card style={{ width: '20rem' }}>
              <Card.Img variant="top" src={props.image1} />
              <Card.Body>
                <Card.Title>{props.title1}</Card.Title>
                <Card.Text>
                  {props.Descrip1}
                </Card.Text>
              </Card.Body>
            </Card>

          </Col>



          <Col>
            <Card style={{ width: '20rem' }}>
              <Card.Img variant="top" src={props.image2} />
              <Card.Body>
                <Card.Title>{props.title2}</Card.Title>
                <Card.Text>
                  {props.Descrip2}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>


          <Col>
            <Card style={{ width: '20rem' }}>
              <Card.Img variant="top" src={props.image3} />
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

    </div>
  )
}

export default Details
