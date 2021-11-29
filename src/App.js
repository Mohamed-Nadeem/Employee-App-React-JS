import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import Logo from './logo.svg';
import Views from './ViewModal/index';
import './App.css';

const app = () => {
  return (
    <div className="App">
     <Navbar bg="dark" variant="dark" className="main-navbar">
      <Navbar.Brand href="/">
        <img
          alt=""
          src={Logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />
        React Employee Table
      </Navbar.Brand>
     </Navbar>
     <div id="router-div">
        <BrowserRouter>
          <Routes>
                <Route path="/" element={<Views.Dashboard />} />
                <Route path="/newEmployee" element={<Views.NewEmployee />} />
                <Route path="/login" element={<Views.LoginPage />} />
                <Route path="/signUp" element={<Views.SignUp />} />
            </Routes>
        </BrowserRouter>
     </div>
    </div>
  );
}

export default app;
