import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import { SignInAndSignUpDiv } from './sign-in-and-sign-up.styles';

const signInAndSignUpPage = () => (
    <SignInAndSignUpDiv>
        <SignIn/>
        <SignUp/>
    </SignInAndSignUpDiv>
);

export default signInAndSignUpPage;