import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import Logo from './logo.svg';
import Views from './ViewModal/index';
import NewEmployee from './ViewModal/NewEmployee';
import './App.css';

const app = () => {
  return (
    <div className="App">
     <Navbar bg="dark" variant="dark">
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
                {/* <Route path="newEmployee" component={NewEmployee} /> */}
                <Route path="/newEmployee" element={<NewEmployee />} />
            </Routes>
        </BrowserRouter>
     </div>
    </div>
  );
}

export default app;
