import React from 'react'
import { Dropdown, Col, Row, Container} from 'react-bootstrap'
import '../components.css'

class Visit extends React.Component {
  render () {
    
    return (
        <Container className="visit">
            <Row className="justify-content-md-center">
    <Col xs lg="5">
      <strong>Coming to visit us? </strong>Here are some of our favorite places around town to
    </Col>
    <Col xs lg="2">
    <Dropdown >
        <Dropdown.Toggle className="visitDropdown">
             A quiet place to read a book
        </Dropdown.Toggle>
        <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Great Library</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Fabulous Park</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Amazing Coffee Shop</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
    </Col>
  </Row>
        </Container>
    )
  }
}

export default Visit
