import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LandingPage from './components/LandingPage';
import HomePage from './components/HomePage';
import ForgetPasswordPage from './components/ForgetPasswordPage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';

import './App.css';

function App() {
  return (
    <Router>
            <div>
                <Routes>
                    <Route exact path="/" element={ <LandingPage /> } />
                    <Route exact path="/login" element={ <LoginPage /> } />
                    <Route exact path="/register" element={ <RegisterPage /> } />
                    <Route exact path="/forget-password" element={ <ForgetPasswordPage /> } />
                    <Route exact path="/home" element={ <HomePage /> } />
                </Routes>
                <Footer />
            </div>
        </Router>
  );
}

export default App;

const Footer = () => {
  return (
      <p className="text-center" style={ FooterStyle }>Designed & coded by Syed Sulaiman</p>
  )
}

const FooterStyle = {
  background: "#222",
  fontSize: ".8rem",
  color: "#fff",
  position: "absolute",
  bottom: 0,
  padding: "1rem",
  margin: 0,
  width: "100%",
  opacity: ".5"
}