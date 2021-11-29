import React, {Component} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import '../ComponentLibrary/NewEmployeeForm.scss';
import { Form, Field } from "@progress/kendo-react-form";
import Input from '../CustomComponents/Input';
import Users from '../DataStore/Users';

//Input field validation functions using RegEx
const emailValidator = (value) => (
    new RegExp(/\S+@\S+\.\S+/).test(value) ? "" : "Please enter a valid email."
);
const nameValidator = (value) => (
    new RegExp(/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/).test(value) ? "" : "Please enter a valid name."
);
const requiredValidator = (value) => {
    return value ? "" : "This field is required";   
}

export default class signUp extends Component {
   constructor(props) {
        super(props);
        this.state = {
            users: []
        };
    }

    componentDidMount() {
        let userDetails = JSON.parse(localStorage.getItem('users'));
        if (userDetails) {
            this.setState({
                users: userDetails
            })
        } else {
            localStorage.setItem('users', JSON.stringify(Users));
            this.setState({
                users: Users
            })
        }
    }

    // Function to handle the submit and validate the user credentials
    handleSubmit = (data, event) => {
        const userDetails = this.state.users;
        const userEmail = data.email;
        for (var i = 0; i < userDetails.length; i++) {
            if (userDetails[i].email === userEmail) {
                alert("The following email ID is in the system.");
            } else {
                const addUserToList = [
                    ...this.state.users,
                    {
                        name: data.name,
                        email: data.email,
                        password: data.password
                    } 
                ]
                localStorage.setItem('users', JSON.stringify(addUserToList));
                event.preventDefault();
                alert("User has been added successfully!");
                window.location.href = "/login";
            }
        }
    };

    render () {
        return (
            <div className="employee-form-div">
                <div style={{ height: 'auto', backgroundColor: '#343A40', paddingTop: '5%', paddingBottom: '5%' }}>
                    <CssBaseline />
                    <Container fixed>
                        <Form
                        onSubmit={this.handleSubmit}
                        initialValues={{
                            name:"", email: "", password: ""
                        }}
                        render={(formRenderProps) => (
                            <form onSubmit={formRenderProps.onSubmit} className="form-comp">
                            <h1 className="form-heading">Sign Up</h1>

                            <Field
                                label="Name:"
                                name="name"
                                fieldType="text"
                                component={Input}
                                validator={[requiredValidator, nameValidator]} />
                            <Field
                                label="Email:"
                                name="email"
                                fieldType="text"
                                component={Input}
                                validator={[requiredValidator, emailValidator]} />
                            <Field
                                label="Password:"
                                name="password"
                                fieldType="password"
                                component={Input}
                                validator={[requiredValidator]} />
                            <button disabled={!formRenderProps.allowSubmit}>
                                Submit Details
                            </button>
                            </form>
                        )}>
                        </Form>
                    </Container>
                </div>
            </div>
        );
    };
}