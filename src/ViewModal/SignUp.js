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
        console.log("Test to see data ", userDetails);
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
        const userPassword = data.password;
        for (var i = 0; i < userDetails.length; i++) {
            if (userDetails[i].email === userEmail && userDetails[i].password === userPassword) {
                alert("Welcome "+ userDetails[i].name + " ! You have successfully logged in!");
                sessionStorage.setItem('LoggedIn', 'true');
                window.location.href = "/";
            } else if (userDetails[i].email === userEmail && userDetails[i].password !== userPassword) {
                alert("The entered password is incorrect.");
            } else 
                alert("Sorry, we could not find your details. Please Sign Up.");
        }
    };

    signUp = () => {
        window.location.href = "/signUp";
    }

    render () {
        return (
            <div style={{ height: 'auto', backgroundColor: '#343A40', paddingTop: '5%', paddingBottom: '5%' }}>
                <CssBaseline />
                <Container fixed>
                    <Form
                    id="newEmployeeForm"
                    name="newEmployeeForm"
                    onSubmit={this.handleSubmit}
                    initialValues={{
                        email: "", password: ""
                    }}
                    render={(formRenderProps) => (
                        <form onSubmit={formRenderProps.onSubmit} className="form-comp" name="empForm">
                        <h1 className="form-heading">Login</h1>

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
                            Sign In
                        </button>
                        <button onClick={this.signUp()}>
                            Sign Up
                        </button>
                        </form>
                    )}>
                    </Form>
                </Container>
            </div>
        );
    };
}