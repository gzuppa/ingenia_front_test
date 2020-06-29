import React from 'react'
import { Col, Row, Container, Card, Image, CardColumns, Breadcrumb } from 'react-bootstrap'
import Layout from '../../assets/Layout'
import '../components.css'

class Contact extends React.Component {
  render () {
    return (
        <Container className="footerVenues" fluid>
             <Row>
                <Col>
                <Col className="copyright">©2014 Ingenia Group</Col>
                <Row>
                <CardColumns className="cols">
                    <Card className="footerCard">
                        <Card.Body>
                            <Image className="country" src={Layout.footerImgs.usa}></Image>
                                 <Card.Subtitle className="footerCardSubtitle">USA</Card.Subtitle>
                                    <Card.Text className="footerCardSubtitle">
                                         1200 18th Street, NW
                                         Suite 700
                                         Washington DC 20036 USA
                                         50220900
                                    </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="footerCard">
                         <Card.Body>
                            <Image className="country" src={Layout.footerImgs.mexico}></Image>
                                 <Card.Subtitle className="footerCardSubtitle">MEXICO</Card.Subtitle>
                                    <Card.Text className="footerCardSubtitle">
                                        Anatole France 311
                                        Polanco, Miguel Hidalgo
                                        11560 México D.F.
                                        50220900
                                    </Card.Text>
                         </Card.Body>
                    </Card>
                </CardColumns>
                </Row>
                </Col>
                
                <Col>
                    <Col>
                        <Breadcrumb>
                            <Breadcrumb.Item active href="#">
                                About Us
                            </Breadcrumb.Item>
                            <Breadcrumb.Item active href="#">
                                Our Work
                            </Breadcrumb.Item>
                            <Breadcrumb.Item active href="#">
                                Blog
                            </Breadcrumb.Item>
                            <Breadcrumb.Item active href="#">
                                Jobs
                            </Breadcrumb.Item>
                            <Breadcrumb.Item active href="#">
                                Contact
                            </Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>
                    <Col>
                    <Breadcrumb className="breadterms">
                            <Breadcrumb.Item active href="#">
                                Terms of use
                            </Breadcrumb.Item>
                            <Breadcrumb.Item active href="#">
                                Privacy Police
                            </Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>
                    <Col className="social">
                    <Image className="socialmedia" src={Layout.footerImgs.twitter}></Image>
                    <Image className="socialmedia" src={Layout.footerImgs.facebook}></Image>
                    <Image className="socialmedia" src={Layout.footerImgs.youtube}></Image>
                    <Image className="socialmedia" src={Layout.footerImgs.linkedin}></Image>
                    </Col>
                </Col>
             </Row>
        </Container>
    )
  }
}

export default Contact