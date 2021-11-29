import React from 'react';
import { Table, Button } from 'react-bootstrap';

const employeeTable = (props) => {
    return (
        <Table striped bordered hover variant="dark" responsive>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Date of Birth</th>
                    <th>Designation</th>
                    <th>Delete Employee</th>
                </tr>
            </thead>
            <tbody>
                { 
                    props.empdetails.map((employee, index) => {
                        return (
                            <tr key={index}>
                                <td>{index}</td>
                                <td>{employee.name}</td>
                                <td>{employee.age}</td>
                                <td>{employee.dob}</td>
                                <td>{employee.designation}</td>
                                <td>
                                    <Button variant="danger" onClick={() => props.click(index)}>Delete Employee</Button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </Table>
    );
}

export default employeeTable;