import React from "react";
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';

import "./App.css";

const RegisterPage = () => {
    return(
        <div className="text-center m-5-auto">
            <h2>Join Us!</h2>
            <Form action="/home">
                <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Username" name="first-name" />
                </Form.Group>

                <Form.Group>
                    <Form.Label>E-Mail</Form.Label>
                    <Form.Control type="email" placeholder="E-Mail" name="email" />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password" />
                    <Link to="/forget-password">Forget password?</Link>
                </Form.Group>

                <p>
                    <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
                </p>

                <Button id="sub-btn" type="submit">
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