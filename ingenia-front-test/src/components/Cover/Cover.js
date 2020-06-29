import React from 'react'
import { Container, Row, Col, Card} from 'react-bootstrap'
import Layout from '../../assets/Layout'
import '../components.css'

class Cover extends React.Component {
  render () {
    
    return (
        <Container>
        <Row>
          <Col className="coverMexico">
            <img className="imgmxc" src={Layout.coverImgs.coverMexico} alt='mexico' /> 
            <h2>Mexico City</h2>
            <Card className="cardMexico" style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Anatole France 311</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Polanco, Miguel Hidalgo, 11560, Mexico DF</Card.Subtitle>
                            <Card.Text>
                                50 22 09 00
                            </Card.Text>
                </Card.Body>
            </Card>
          </Col>
          <Col className="coverWashington">
            <img className="imgwsh" src={Layout.coverImgs.coverWashington} alt='washington' />
            <h2>Washington D.C.</h2>
            <Card className="cardWashington" style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>1200 18th Street, NW</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Suite 700</Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted">Washington DC 20036 USA</Card.Subtitle>
                            <Card.Text>
                                50 22 09 00
                            </Card.Text>
                </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Cover
