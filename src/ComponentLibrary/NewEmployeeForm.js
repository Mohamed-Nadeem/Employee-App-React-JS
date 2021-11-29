import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import './NewEmployeeForm.scss';
import { Form, Field } from "@progress/kendo-react-form";
import Input from '../CustomComponents/Input';
import DropDown from '../CustomComponents/DropDown';

//Input field validation functions using RegEx
const nameValidator = (value) => (
    new RegExp(/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/).test(value) ? "" : "Please enter a valid name."
);
const ageValidator = (value) => (
    new RegExp(/^(1[89]|[2-9]\d)$/).test(value) ? "" : "Please enter a valid age between 18-99."
);
const requiredValidator = (value) => {
    return value ? "" : "This field is required";   
}

const employeeForm = (props) => {
    const designations = [ 
        "Accountant",
        "HR-Executive",
        "Tech-Specialist",
        "IT-Administrator",
        "General Manager"
     ]

    // Handle the form on sumbit event for storing new details
    const handleSubmit = (data, event) => {
        const addEmployeeToList = [
            ...props.empDetails,
            {
                name: data.employeeName,
                age: data.age,
                dob: data.dob,
                designation: data.designation
            } 
        ]
        localStorage.setItem('employees', JSON.stringify(addEmployeeToList));
        event.preventDefault();
        alert("New Employee has been Added!");
        window.location.href = "/";
    };

   return (
       <div style={{ height: 'auto', backgroundColor: '#343A40', paddingTop: '5%', paddingBottom: '5%' }}>
        <CssBaseline />
        <Container fixed>
            <Form
            id="newEmployeeForm"
            name="newEmployeeForm"
            onSubmit={handleSubmit}
            initialValues={{
                employeeName: "", age: "", designations: "", dob: ""
            }}
            render={(formRenderProps) => (
                <form onSubmit={formRenderProps.onSubmit} className="form-comp" name="empForm">
                <h1 className="form-heading">Add New Employee</h1>

                <Field
                    label="Name:"
                    name="employeeName"
                    fieldType="text"
                    component={Input}
                    validator={[requiredValidator, nameValidator]} />
                <Field
                    label="Age:"
                    name="age"
                    fieldType="number"
                    component={Input}
                    validator={[requiredValidator, ageValidator]} />
                <Field 
                    label="Designation:"
                    name="designation"
                    component={DropDown}
                    options={designations}
                    validator={requiredValidator} />
                <Field
                    label="Date of Birth:"
                    name="dob"
                    fieldType="date"
                    component={Input}
                    validator={[requiredValidator]} />
                
                <button disabled={!formRenderProps.allowSubmit}>
                    Submit
                </button>
                </form>
            )}>
            </Form>
        </Container>
       </div>
   );
}

export default employeeForm;