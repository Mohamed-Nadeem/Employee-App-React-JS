import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import './NewEmployeeForm.scss';
import { Form, Field } from "@progress/kendo-react-form";
import Alert from 'react-bootstrap/Alert';
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
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [showSuccess, setShow] = useState(false);
    
    const designations = [ 
        "Accountant",
        "HR-Executive",
        "Tech-Specialist",
        "IT-Administrator",
        "General Manager"
     ]

    // Handle the form on sumbit event for storing new details
    const handleSubmit = (data, event) => {
        setShow(false);
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
        setShow(true);
        window.location.href = "/";
    };

   return (
       <div>
            { showSuccess && 
                    <Alert variant="success">
                        New Employee has been Added!
                    </Alert>
            }
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
                        label="Employment Date:"
                        name="dob"
                        fieldType="date"
                        format= "dd/MM/yyyy"
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
       </div>
   );
}

export default employeeForm;