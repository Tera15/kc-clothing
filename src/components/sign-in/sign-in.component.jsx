import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';


import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

import { connect } from 'react-redux'

import  './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { emailSignInStart } = this.props
        const { email, password } = this.state

        emailSignInStart(email, password)
    }
    handleChange = (event) => {
        const {value, name} = event.target
        this.setState({[name]: value})//bracket notation so that name is dynamic to where the function is called eg: email or password 
    }
    render() {
        const { googleSignInStart } = this.props
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                  name='email'
                  type='email'
                  handleChange={this.handleChange}
                  value={this.state.email}
                  label='email'
                  required
                    />
                   
                    <FormInput 
                    name='password'
                    type='password'
                    value={this.state.password}
                    handleChange={this.handleChange}
                    label='password'
                    required
                    />
                
                <div className='buttons'>
                    <CustomButton type='submit'>Sign In</CustomButton>
                    <CustomButton onClick={googleSignInStart} type='button' isGoogleSignIn>Sign in with google</CustomButton>
                    {/*isGoogleSignIn will evaluate to true if no value passed. Help to conditionally render our button*/}
                </div>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
})

export default connect(null, mapDispatchToProps)(SignIn);