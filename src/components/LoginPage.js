import React from "react";
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';

import "./App.css";

const LoginPage = () => {
    return(
        <div className="text-center m-5-auto">
            <h2>Welcome Back</h2>
            <Form action="/home">
                <Form.Group>
                    <Form.Label>E-Mail</Form.Label>
                    <Form.Control type="email" placeholder="E-Mail" name="first-name" />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password" />
                    <Link to="/forget-password">Forget password?</Link>
                </Form.Group>

                <Button id="sub-btn" type="submit">
                    Login
                </Button>
            </Form>

            <footer>
                <p>First time? <Link to="/register">Create an account</Link>.</p>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>

        </div>
    )
}

export default LoginPage;