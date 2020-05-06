import {
    connect
} from 'react-redux';
import {
    createStructuredSelector
} from 'reselect';
import {
    compose
} from 'redux';

import {
    selectIsFetching
} from '../../redux/user/user.selectors';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import SignInAndSignUpPage from './sign-in-and-sign-up.component';

const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectIsFetching(state) // map state to props isLoading is a function that takes in state to determine bool
});

const SignInAndSignUpPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(SignInAndSignUpPage)

export default SignInAndSignUpPageContainer;