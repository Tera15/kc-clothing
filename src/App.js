import React from 'react';
import './App.css';
import {Switch, Route, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import CheckoutPage from './pages/checkout/checkout.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

class App extends React.Component{
 

  unsubscribeFromAuth = null;

  componentDidMount() {

    const { setCurrentUser } = this.props
    //accessing user data client side
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) { //checks if user exists and if so sends snapshot of the userRef
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
        setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            });
          });
      }
      setCurrentUser(userAuth) //sets current user to null on log out
     });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render(){
    return(
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route  path='/shop' component={ShopPage} />
          <Route  exact path='/checkout' component={CheckoutPage} />
          <Route
           exact path='/signin' 
           render={ ()=> 
           this.props.currentUser 
           ? (<Redirect to='/'/>) 
           : (<SignInAndSignUpPage/>)} 
           />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)) //action object that is passed to every reducer
});

export default connect(mapStateToProps, mapDispatchToProps)(App); //null as first argument in connect because I dont need mapStateToProps in this particular component






