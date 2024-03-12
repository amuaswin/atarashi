import React from 'react';
import Form from 'react-bootstrap/Form';
import { Button, Row, Col } from 'react-bootstrap';
import './Login.css';
import { useState } from 'react';


function FormGroupExample() {

  const [details, setDetails] = useState({name:'',mail:'',password:'',number:'',});
  

  function handleChange(e) {

    setDetails((prev) => ({...prev,[e.target.name]:e.target.value,}));
    
    
  }
  
  function handleClick(e) {
    e.preventDefault();
    console.log(details)
  }

  return (
    <div className='container'>
      {/* <h1>Name {details.name}</h1>
      <h1>Mail{details.mail}</h1>
      <h1>password{details.password}</h1>
      <h1>Phone no{details.number}</h1> */}
    
    <Row>
      <Col md={4}>


      </Col>
      <Col md={4}>
        <Form className="form1">

          <Form.Group className="mb-3" controlId="text">
            <Form.Label>User Name</Form.Label>
            <Form.Control onChange={handleChange} type="text" placeholder="Enter your Name" 
            name='name'
            value={details.name} />
          </Form.Group>


          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Mail id</Form.Label>
            <Form.Control onChange={handleChange} type="email" placeholder="Enter email" 
            name='mail'
            value={details.mail} />
          </Form.Group>


          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control onChange={handleChange} type="password" placeholder="Password" 
            name='password'
            value={details.password} />
          </Form.Group>


          <Form.Group className="mb-3" controlId="formGroupPhone">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control onChange={handleChange} type="number" placeholder="Phone number"
            name='number' value={details.number} />
          </Form.Group>


          <Button type="submit" onClick={handleClick}>Login</Button>

          

        </Form>
      </Col>

      <Col md={4}>

      </Col>
    </Row>
    </div>
  );
}

export default FormGroupExample;
