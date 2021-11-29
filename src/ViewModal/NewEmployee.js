import React, { Component } from 'react';
import EmployeeForm from '../ComponentLibrary/NewEmployeeForm';
import { Navbar, Nav } from 'react-bootstrap';

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
                <Navbar bg="primary" variant="dark">
                    <Navbar.Brand href="#AddNewEmployee">ADD NEW EMPLOYEE</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/">View Dashboard</Nav.Link>
                    </Nav>
                </Navbar>
                <h3 className="center" 
                    style={{ 
                        paddingBottom: '2%',
                        paddingTop: '2%',
                        backgroundColor: 'black',
                        color: 'white' }}>
                            Please add the details below:</h3>
                <EmployeeForm empDetails={this.state.empDetails}/>
            </div>
        );
    }
}