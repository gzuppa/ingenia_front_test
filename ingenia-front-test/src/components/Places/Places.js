import React from 'react'
import { Card, CardColumns, Image } from 'react-bootstrap'
import '../components.css'
import Layout from '../../assets/Layout'

class Places extends React.Component {
  render () {
    
    return (
        <CardColumns className="placesContainer">
  <Card className="noborder">
    <Card.Body>
      <Card.Title className="placesTitleRight">Mexico City</Card.Title>
      <Card.Subtitle className="placesSubtitleRight">Name of Place</Card.Subtitle>
      <Image className="blueicon" src={Layout.placesImgs.blue}></Image>
      <Card.Title className="placesTitleRight">123 Main St.</Card.Title>
      <Card.Text className="placesTextRight">
        amazing burgers, imprompteau jazz trios
      </Card.Text>
    </Card.Body>
  </Card>
  <Card className="noborder">
    <Card.Body>
      <Card.Subtitle className="placesSubtitleRight">Name of Place</Card.Subtitle>
      <Image className="blueicon" src={Layout.placesImgs.blue}></Image>
      <Card.Title className="placesTitleRight">123 Main St.</Card.Title>
      <Card.Text className="placesTextRight">
        amazing burgers, imprompteau jazz trios
      </Card.Text>
    </Card.Body>
  </Card>
  <Card className="noborder">
    <Card.Body>
      <Card.Title className="placesTitleLeft">Mexico City</Card.Title>
      <Card.Subtitle className="placesSubtitleLeft">Name of Place</Card.Subtitle>
      <Image className="blueiconLeft" src={Layout.placesImgs.blue}></Image>
      <Card.Title className="placesTitleLeft">123 Main St.</Card.Title>
      <Card.Text className="placesTextLeft">
        amazing burgers, imprompteau jazz trios
      </Card.Text>
    </Card.Body>
  </Card>
  <Card className="noborder">
    <Card.Body>
      <Card.Subtitle className="placesSubtitleLeft">Name of Place</Card.Subtitle>
      <Image className="blueiconLeft" src={Layout.placesImgs.blue}></Image>
      <Card.Title className="placesTitleLeft">123 Main St.</Card.Title>
      <Card.Text className="placesTextLeft">
        amazing burgers, imprompteau jazz trios
      </Card.Text>
    </Card.Body>
  </Card>
</CardColumns>
    )
  }
}

export default Places
