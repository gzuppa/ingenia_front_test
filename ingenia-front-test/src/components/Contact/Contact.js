import React from 'react'
import { Col, Row, Container, Card } from 'react-bootstrap'
import '../components.css'

class Contact extends React.Component {
  render () {
    return (
        <Container className="contact" fluid>
            <Row>
             <Col>
             <h5 style={{marginTop:"40px"}}>
                 Ingenia is located in two major business & government hubs in the Americas
             </h5>
             <h2>
                 Contact us
             </h2>
             <h5>
                 Send us an email and we get back to you
             </h5>
             </Col>
            </Row>
        </Container>
    )
  }
}

export default Contact