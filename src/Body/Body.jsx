import React from 'react';
import './Body.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';


const Body = ({ Description }) => {

  return (
    <div className='Container'>
      <p>{Description}</p>
      <Form>
        <Row>
          <Col className='Col1'>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
          </Col>
          <Col>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Col>
        </Row>
      </Form>

    </div>
  )
}

export default Body;
