import React, {Component} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import '../ComponentLibrary/NewEmployeeForm.scss';
import { Form, Field } from "@progress/kendo-react-form";
import Alert from 'react-bootstrap/Alert';
import Input from '../CustomComponents/Input';
import Users from '../DataStore/Users';

//Input field validation functions using RegEx
const emailValidator = (value) => (
    new RegExp(/\S+@\S+\.\S+/).test(value) ? "" : "Please enter a valid email."
  );
const requiredValidator = (value) => {
    return value ? "" : "This field is required";   
}

export default class loginPage extends Component {
   constructor(props) {
        super(props);
        this.state = {
            alertshowPwd : false,
            alertshowSignUp: false
        };
    }

    componentDidMount() {
        let userDetails = JSON.parse(localStorage.getItem('users'));
        if (!userDetails) {
            localStorage.setItem('users', JSON.stringify(Users));
        }
    }

    // Function to handle the submit and validate the user credentials
    handleSubmit = (data, event) => {
        this.setState({
            alertshowPwd : false,
            alertshowSignUp: false
        })
        const userDetails = JSON.parse(localStorage.getItem('users'));
        const userEmail = data.email;
        const userPassword = data.password;
        for (var i = 0; i < userDetails.length; i++) {
            if (userDetails[i].email === userEmail && userDetails[i].password === userPassword) {
                const userStat = [{status: 'true', user: userDetails[i].name}];
                sessionStorage.setItem('LoggedIn', JSON.stringify(userStat));
                window.location.href = "/";
                return( <Alert variant='success'> You have successfully logged in! </Alert> );
            } else if (userDetails[i].email === userEmail && userDetails[i].password !== userPassword) {
               this.setState({
                   alertshowPwd: true
               })
            } else {
                this.setState({
                    alertshowSignUp: true
                })
            }
        }
    };

    //redirect to signUp page
    signUpPage = (event) => {
        event.preventDefault();
        window.location.href = "/signUp";
    }   

    render () {
        return (
            <div>
                { this.state.alertshowPwd && 
                    <Alert variant="warning">
                        The entered password is incorrect.
                    </Alert>
                }
                { this.state.alertshowSignUp && 
                    <Alert variant="warning">
                        Sorry, we could not find your details. Please Sign Up.
                    </Alert>
                }
                <div className="employee-form-div">
                    <div style={{ height: 'auto', backgroundColor: '#343A40', paddingTop: '5%', paddingBottom: '5%' }}>
                        <CssBaseline />
                        <Container fixed>
                            <Form
                            onSubmit={this.handleSubmit}
                            initialValues={{
                                email: "", password: ""
                            }}
                            render={(formRenderProps) => (
                                <div>
                                    <form onSubmit={formRenderProps.onSubmit} className="form-comp">
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
                                        <input id="signup-button" type="button" onClick={this.signUpPage} value="Sign Up" />
                        
                                    </form>
                                </div>
                            )}>
                            </Form>
                        </Container>
                    </div>
                </div>
            </div>
        );
    };
}