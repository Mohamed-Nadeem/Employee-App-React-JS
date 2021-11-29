import React, { Component } from 'react';
import EmployeeDetails from '../DataStore/EmployeeDetails';
import { Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import EmployeeTable from '../ComponentLibrary/EmployeeTable';

export default class Dashboard extends Component {
    state = {
        empDetails: []
    };
    
    // update the state based on the local storage to upate with the latest records
    componentDidMount() {
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
                <Navbar bg="primary" variant="dark">
                    <Navbar.Brand href="#home">EMPLOYEE DASHBOARD</Navbar.Brand>
                    <Nav className="mr-auto">
                    <Nav.Link href="/newEmployee">Add New Employee</Nav.Link>
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