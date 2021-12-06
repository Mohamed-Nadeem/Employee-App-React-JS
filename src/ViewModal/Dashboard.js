import React, { Component } from 'react';
import EmployeeDetails from '../DataStore/EmployeeDetails';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import EmployeeTable from '../ComponentLibrary/EmployeeTable';
import '../App.css';

export default class Dashboard extends Component {
    state = {
        empDetails: []
    };

    // update the state based on the local storage to update with the latest records
    componentDidMount() {
        this.checkifUserloggedIn();
        let employeeDetails = JSON.parse(localStorage.getItem('employees'));
        if (employeeDetails) {
            this.setState({
                empDetails: employeeDetails
            })
        } else {
            localStorage.setItem('employees', JSON.stringify(EmployeeDetails));
            this.setState({
                empDetails: EmployeeDetails
            })
        }
    }

    // Check if the user is logged in or not
    checkifUserloggedIn = () => {
        if (!sessionStorage.getItem("LoggedIn")) {
            window.location.href = "/login";
        }
    }

    // method to log out
    logOut = (event) => {
        sessionStorage.removeItem("LoggedIn");
        event.preventDefault();
        window.location.href = "/login";
    }

    // method for the deletion of an employee
    deleteEmployee = (id) => {
        const employeeList = this.state.empDetails.slice();
        employeeList.splice(id, 1);
        this.setState({
            empDetails: employeeList
        });
        localStorage.setItem('employees', JSON.stringify(employeeList));
    }

    // method for filtering the employee based on Name
    findEmployee = (event) => {
        let employeeDetails = JSON.parse(localStorage.getItem('employees'));
        var searchEmp = employeeDetails;
        searchEmp = searchEmp.filter((item) => {
          return item.name.toString().toLowerCase().search(
            event.target.value.toString().toLowerCase()) !== -1;
        });
        this.setState({empDetails: searchEmp});
    }

    render () {
        return (
            <div style={{ height: 'auto', backgroundColor: '#343A40' }}>
                <Navbar bg="primary" variant="dark" className="navbar">
                    <Navbar.Brand href="#home">EMPLOYEE DASHBOARD</Navbar.Brand>
                    <Nav className="mr-auto">
                    <Nav.Link href="/newEmployee">Add New Employee</Nav.Link>
                    <Button variant="success" onClick={this.logOut}>Log Out</Button>
                    </Nav>
                    <Form inline>
                    <FormControl type="text" placeholder="Find Employee By Name" className="mr-sm-2" onChange={(e) => this.findEmployee(e)} />
                    </Form>
                </Navbar>
                <EmployeeTable empdetails={this.state.empDetails} click={(id) => this.deleteEmployee(id)} />
            </div>
        );
    }
}
