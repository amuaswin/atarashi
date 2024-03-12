import React, { useState } from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { Button, Form, Row, Col } from 'react-bootstrap';

function FormValidation() {
    const [input, setInput] = useState({
        username: '',
        password: '',
        email: '',
        number: '',
        age: '',
        website: '',
    });

    const schema = yup.object().shape({
        username: yup.string().required(),
        password: yup.string().required().min(8, 'Password must contain at least 8 characters'),
        email: yup.string().email().required(),
        number: yup.string().matches(/^[0-9]{10}$/, 'Mobile number must be a valid number'),
        age: yup.number().required().positive().integer().min(1, 'Age must be a positive integer'),
        website: yup.string().url().nullable(),
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInput(prev => ({ ...prev, [name]: value }));

    };

    const handleSubmit = (values) => {
        console.log(values);
    };

    return (
        <div>
            <Formik
                initialValues={input}
                onSubmit={handleSubmit}
                validationSchema={schema}
                enableReinitialize
            >
                {({ handleSubmit }) => (
                    <Form onSubmit={handleSubmit}>
                        <Row>

                            <Col md={4}>
                                <Form.Group controlId="formBasicName">
                                    <Form.Label>User name</Form.Label>
                                    <Field
                                        as={Form.Control}
                                        type="text"
                                        name="username"
                                        placeholder="User Name"
                                        required onChange={handleChange}
                                    />
                                    <ErrorMessage name="username" className='text-danger' component="div" />
                                </Form.Group>

                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Field
                                        as={Form.Control}
                                        type="email"
                                        name="email"
                                        placeholder="Enter email"
                                        required onChange={handleChange}
                                    />

                                    <ErrorMessage name="email" className='text-danger' component="div" />
                                </Form.Group>
                                <Form.Group controlId="formBasicWebsite">
                                    <Form.Label>Website Name</Form.Label>
                                    <Field
                                        as={Form.Control}
                                        type="url"
                                        name="website"
                                        placeholder="URL"
                                        required onChange={handleChange}
                                    />
                                    <ErrorMessage name="website" className='text-danger' component="div" />
                                </Form.Group>
                            </Col>
                            <Col md={4}>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Field
                                        as={Form.Control}
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        required onChange={handleChange}
                                    />
                                    <ErrorMessage name="password" className='text-danger' component="div" />
                                </Form.Group>
                                <Form.Group controlId="formBasicNumber">
                                    <Form.Label>Mobile Number</Form.Label>
                                    <Field
                                        as={Form.Control}
                                        type="number"
                                        name="number"
                                        placeholder="Mobile Number"
                                        required onChange={handleChange}
                                    />
                                    <ErrorMessage name="number" className='text-danger' component="div" />
                                </Form.Group>
                                <Form.Group controlId="formBasicAge">
                                    <Form.Label>Enter your age</Form.Label>
                                    <Field
                                        as={Form.Control}
                                        type="number"
                                        name="age"
                                        placeholder="Age"
                                        required onChange={handleChange}
                                    />
                                    <ErrorMessage name="age" className='text-danger' component="div" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Button type='submit' onClick={handleSubmit}>Submit</Button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default FormValidation;
