import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import Layout from '../../assets/Layout'
import '../components.css'

class Cover extends React.Component {
  render () {
    
    return (
        <Container>
        <Row>
          <Col className="coverMexico">
            <img src={Layout.coverImgs.coverMexico} alt='mexico' />
          </Col>
          <Col className="coverWashington">
            <img src={Layout.coverImgs.coverWashington} alt='washington' />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Cover
