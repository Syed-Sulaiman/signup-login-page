import React from "react";
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import { Button } from "react-bootstrap";

import "../App.css";

const RegisterPage = () => {
    return(
        <div className="text-center m-5-auto">
            <h2>Join Us!</h2>
            <Form action="/home">
                <Form.Group>
                    <Form.Label>Username</Form.Label><br/>
                    <Form.Control type="text" placeholder="Username" name="first-name" />
                </Form.Group><br/><br/>

                <Form.Group>
                    <Form.Label>E-Mail</Form.Label><br/>
                    <Form.Control type="email" placeholder="E-Mail" name="email" />
                </Form.Group><br/><br/>

                <Form.Group>
                    <Form.Label>Password</Form.Label><br/>
                    <Form.Control type="password" placeholder="Password" name="password" />
                </Form.Group><br/>

                <p>
                    <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
                </p>

                <Button id="sub_btn" type="submit">
                    Register
                </Button>
            </Form>

            <footer>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>

        </div>

    )
}

export default RegisterPage;