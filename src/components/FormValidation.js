import React, { useState } from 'react'
import { Formik, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { Button, Form } from 'react-bootstrap';


function FormValidation() {
  const [inputs, setInputs] = useState({
    username: '',
    password: '',
    email: '',
  })
  const schema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required().min(8, 'password must contain 8 characters'),
    email: yup.string().email(),

  })


  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev, [e.target.name]: e.target.value
    }))
  }
  const handleSubmit = (e) => {
    // e.preventDefault();
    console.log(inputs);
  }
  return (
    <div>
      <Formik
        initialValues={inputs}
        onSubmit={handleSubmit}
        validationSchema={schema}
        enableReinitialize >

        {({ handleSubmit }) => (
          <Form>
            <Form.Label>User Name</Form.Label>
            <Form.Control
              type='text'
              name='username'
              value={inputs.name}
              required onChange={handleChange}
            />
            <ErrorMessage name='username' component='div' />
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='password'
              name='password'
              value={inputs.password}
              required onChange={handleChange}
            />
            <ErrorMessage name='password' component='div' />
            <Form.Label>Email</Form.Label>
            <Form.Control
              type='email'
              name='email'
              value={inputs.email}
              required onChange={handleChange}
            />
            <ErrorMessage name='email' component='div' />
            <Button type='submit' onClick={handleSubmit}>Submit</Button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default FormValidation
