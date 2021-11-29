import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Form, Col, Button } from 'react-bootstrap';

const employeeForm = (props) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [validated, setValidated] = useState(false);

    // Handle the form on sumbit event for validation and storing new details
    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        setValidated(true);
      } else {  
        event.preventDefault();
        setValidated(true);
        const addEmployeeToList = [
            ...props.empDetails,
            {
                name: event.target.employeeName.value,
                age: event.target.age.value,
                dob: event.target.dob.value,
                designation: event.target.designation.value
            } 
        ]
        localStorage.setItem('employees', JSON.stringify(addEmployeeToList));
      }
    };

    // Method to clear the form
    const clearForm = () => {
        document.getElementById("newEmployeeForm").reset();
    }

   return (
       <div style={{ height: 'auto', backgroundColor: '#343A40', paddingTop: '5%' }}>
        <CssBaseline />
        <Container fixed>
            <Box sx={{ bgcolor: '#cfe8fc', height: '50px' }}>
                <Form noValidate validated={validated} onSubmit={handleSubmit} id="newEmployeeForm">
                    <Form.Row>
                        <Form.Group as={Col} md="4" controlId="validationName">
                            <Form.Label>Employee Name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Employee Name"
                                name="employeeName"
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                                Please Type a Name.
                                </Form.Control.Feedback>
                        </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationAge">
                            <Form.Label>Age of Employee</Form.Label>
                            <Form.Control
                                required
                                type="number"
                                placeholder="Age"
                                name="age"
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                                Please Type an Age.
                                </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationDesignation">
                            <Form.Label>Designation</Form.Label>
                                <Form.Control as="select"  name="designation">
                                <option>Accountant</option>
                                <option>HR-Executive</option>
                                <option>Tech-Specialist</option>
                                <option>IT-Administrator</option>
                                <option>General Manager</option>
                                </Form.Control>
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                                Please Select a Designation.
                                </Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} md="4" controlId="validationDob">
                            <Form.Label>Date of Birth</Form.Label>
                            <Form.Control
                                required
                                type="date"
                                placeholder="Date of Birth"
                                name="dob"
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                                Please select the Date of Birth.
                                </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4">
                            <Button type="submit" style={{ marginTop: '8%' }}>Submit Details</Button>
                            <Button type="button" 
                                style={{ marginLeft: '2%', marginTop: '8%' }}
                                onClick={clearForm}>Clear</Button>
                        </ Form.Group>
                    </Form.Row>
                </Form>
            </ Box>
        </Container>
       </div>
   );
}

export default employeeForm;