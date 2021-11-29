import React, { Component } from 'react';
import EmployeeForm from '../ComponentLibrary/NewEmployeeForm';
import { Navbar, Nav } from 'react-bootstrap';
import '../App.css';

export default class NewEmployee extends Component {
    state = {
        empDetails: []
    }

    // Get the updated employee list from the local storage
    componentDidMount() {
        let employeeDetails = JSON.parse(localStorage.getItem('employees'));
        this.setState({
            empDetails: employeeDetails
        })
    }

    render () {
        return (
            <div>
                <Navbar bg="primary" variant="dark" className="navbar">
                    <Navbar.Brand href="#AddNewEmployee">ADD NEW EMPLOYEE</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/">View Dashboard</Nav.Link>
                    </Nav>
                </Navbar>
                <div className="employee-form-div">
                    <EmployeeForm empDetails={this.state.empDetails}/>
                </div>
            </div>
        );
    }
}