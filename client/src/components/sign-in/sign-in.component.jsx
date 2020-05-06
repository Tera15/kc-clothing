import React, { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';


import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

import { connect } from 'react-redux'

import  './sign-in.styles.scss';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
    const [userCredentials, setCredentials] = useState({email: '', password: ''})

    const { email, password } = userCredentials;
   const handleSubmit = async event => {
        event.preventDefault();
       

        emailSignInStart(email, password)
    }
    const handleChange = (event) => {
        const {value, name} = event.target

         //bracket notation so that name is dynamic to where the function is called eg: email or password
         // spread in user credentials and then update the value that we want ie: email or password
        setCredentials({...userCredentials, [name]: value}) 
    }
        
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={handleSubmit}>
                    <FormInput 
                  name='email'
                  type='email'
                  handleChange={handleChange}
                  value={email}
                  label='email'
                  required
                    />
                   
                    <FormInput 
                    name='password'
                    type='password'
                    value={password}
                    handleChange={handleChange}
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


const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
})

export default connect(null, mapDispatchToProps)(SignIn);