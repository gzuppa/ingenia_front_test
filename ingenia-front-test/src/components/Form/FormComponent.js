import React from 'react'
import {Container, Form, Col, Button, Image} from 'react-bootstrap'
import Layout from '../../assets/Layout'
import '../components.css'

const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
}

class FormComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      Name: null,
      errors: {
        Name: ''
      }
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    fetch('http://ingenia.com/snippets/test/contact.php', {
      method: 'POST',
      mimeType: 'multipart/form-data',
      body: data,
    });
    if(validateForm(this.state.errors)) {
      console.info('Formulario válido')
    }else{
      console.error('Formulario inválido')
    }
  }


  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case 'Name': 
        errors.Name = 
          value.length < 5
            ? 'Este campo no puede quedar vacio!'
            : '';
        break;
      default:
        break;
    }

    this.setState({errors, [name]: value});
  }


  render () {
    return (
        <Container style={{marginTop:"40px"}}>
          <Form className="formContainer" onSubmit={this.handleSubmit}>
            <Form.Row className="formrow">
            <Image className="formBullet" src={Layout.formImgs.one}></Image>
             <Form.Group as={Col} sm={4}>
              <Form.Control type="text" placeholder="Name" />
            </Form.Group>

             <Form.Group as={Col} sm={4} >
               <Form.Control type="text" placeholder="Last Name" />
             </Form.Group>
            </Form.Row>

            <Form.Row className="formrow">
            <Image className="formBullet" src={Layout.formImgs.two}></Image>
             <Form.Group as={Col} sm={4} >
              <Form.Control type="email" placeholder="Email" />
             </Form.Group>

             <Form.Group as={Col} sm={4} >
              <Form.Control type="text" placeholder="Phone" />
             </Form.Group>
            </Form.Row>
             
             <Form.Row className="formrow">
             <Image className="formBullet" src={Layout.formImgs.three}></Image>
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