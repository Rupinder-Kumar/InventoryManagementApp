import React, { Component } from "react";
import { connect } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { login } from "../store/LoginActions";
import CustomInputComponent from '../../common/ui/Input';
import "./Login.scss";

class Login extends Component {

    handleSignIn = values => {
        this.props.login(values);
    }

    render() {
        const { error } = this.props;
        const initialFormValue = {
            username: '',
            password: ''
        }

        return (
            <section className="login-section">
                <div className="container login-container">
                    <div className="row">
                        <div className="col-md-4 offset-md-4 login-card col-12 col-sm-4 offset-sm-4">
                            <div className="card">
                                <div className="card-body">
                                <h3 className="text-center mb-4">Sign In</h3>
                                    <Formik
                                        enableReinitialize
                                        initialValues={initialFormValue}
                                        onSubmit={(values, { setSubmitting }) => {
                                            setSubmitting(false);
                                            this.handleSignIn(values);
                                        }}
                                        validate={values => {
                                            const errors = {};
                                            
                                            if (!values.username) errors.username = 'Username is Required';
                                                                                      
                                            if (!values.password) errors.password = 'Password is Required';

                                            return errors;
                                        }}
                                    >

                                        {formikProps => {
                                            return (
                                                <Form>
                                                    {/* Username field and validations */}
                                                    <div className={'form-group mb-4' + (formikProps.errors.username && formikProps.touched.username ? ' form-field-error' : '')}>
                                                        <Field name="username" placeholder="Username" component={CustomInputComponent} type="text" />
                                                        {formikProps.errors.username && formikProps.touched.username && (
                                                            <div className="form-error">{formikProps.errors.username}</div>
                                                        )}
                                                    </div>

                                                    {/* Password field and validations */}
                                                    <div className={'form-group mb-4' + (formikProps.errors.password && formikProps.touched.password ? ' form-field-error' : '')}>
                                                        <Field name="password" placeholder="Password" component={CustomInputComponent} type="password" />
                                                        {formikProps.errors.password && formikProps.touched.password && (
                                                            <div className="form-error">{formikProps.errors.password}</div>
                                                        )}
                                                    </div>   
                                                                                                                                                         
                                                    <div className="login-btn mb-4">             
                                                        <button type="submit" className="btn btn-primary btn-block text-uppercase">Login</button>
                                                    </div>
                                                    {error.length > 0 &&  (
                                                        <div className="form-error mb-4 text-center">{error}</div>
                                                    )}                                                    
                                                </Form>    
                                            )}}

                                    </Formik>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}


const mapStateToProps = state => ({
    error: state.user.error
});

const mapDispatchToProps = dispatch => ({
    login: payload => dispatch(login(payload))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);