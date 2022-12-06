import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Contact() {
    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    function handleChange(event) {
        if (event.target.name === 'email') {
            const validEmail = validateEmail(event.target.value);
            if (validEmail) {
                console.log('valid email')
            } else {
                alert('Not a valid email address. Please try again')
            }
        } else {
            if (!event.target.value.length) {
                alert('Field is required')
            } else {
                console.log('valid email or text');
            }
        }
    }

    return (
        <div>
            <h1 className='d-flex justify-content-center my-3'>Contact</h1>
            <section className="contact-section m-5">
                <Form className="m-5">
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="input" placeholder="Name" onBlur={handleChange} name="name" />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onBlur={handleChange} name="email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Message</Form.Label>
                        <Form.Control type="input" placeholder="Please enter a short description on why you are reaching out." onBlur={handleChange} name="text" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>

            </section>
            <ul className='d-flex justify-content-around mb-5'>
                <li><a href="tel:925-408-9687">Call</a></li>
                <li><a href="mailto:deand925@gmail.com">Email</a></li>
                <li><a href="https://github.com/deand925">GitHub</a></li>
            </ul>
        </div>
    )
}