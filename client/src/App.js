import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPageContainer from './pages/sign-in-and-sign-up/sign-in-and-sign-up.container';

import CheckoutPage from './pages/checkout/checkout.component';

import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

import { GlobalStyles } from './global.styles'

class App extends React.Component{
 

  unsubscribeFromAuth = null;

  componentDidMount() {
const { checkUserSession } = this.props
    checkUserSession();
}

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render(){
    return(
      
      <div>
        <GlobalStyles/>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route
           exact path='/signin' 
           render={ ()=> 
           this.props.currentUser 
           ? (<Redirect to='/'/>) 
           : (<SignInAndSignUpPageContainer/>)} 
           />
        </Switch>
        
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
})
const mapDispatchToProps = dispatch => ({
checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App); //null as first argument in connect because I dont need mapStateToProps in this particular component






