import React from 'react'
import {Container, Form, Col, Button} from 'react-bootstrap'
import '../components.css'

class FormComponent extends React.Component {
  render () {
    return (
        <Container style={{marginTop:"40px"}}>
          <Form className="formContainer">
            <Form.Row className="formrow">
             <Form.Group as={Col} sm={4}>
              <Form.Control type="text" placeholder="Name" />
            </Form.Group>

             <Form.Group as={Col} sm={4} >
               <Form.Control type="text" placeholder="Last Name" />
             </Form.Group>
            </Form.Row>

            <Form.Row className="formrow">
             <Form.Group as={Col} sm={4} >
              <Form.Control type="email" placeholder="Email" />
             </Form.Group>

             <Form.Group as={Col} sm={4} >
              <Form.Control type="text" placeholder="Phone" />
             </Form.Group>
            </Form.Row>
             
             <Form.Row className="formrow">
             <Form.Group as={Col} sm={8}>
              <Form.Label>Tell us about your challenge or opportunity</Form.Label>
              <Form.Control as="textarea" rows="6" />
             </Form.Group>
             </Form.Row>

                <Button className="formButton" type="submit">
                   SEND
                </Button>
            </Form>
        </Container>
    )
  }
}

export default FormComponent