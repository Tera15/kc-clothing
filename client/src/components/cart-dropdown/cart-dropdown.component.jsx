import React from 'react';
import { withRouter } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import { toggleCartHidden } from '../../redux/cart/cart.actions';

import './cart-dropdown.styles.scss';

// dispatch is passed as a prop to component from connect if connect is not passed a second argument of mapDispatchToProps
// usefull to not have to write unnecessary mapDispatchToProps
const CartDropdown = ({ cartItems, history, dispatch }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {   
                cartItems.length ? // if greater than zero render cartItems otherwise render empty message span
                cartItems.map( cartItem => (
                    <CartItem key={cartItem.id} item={cartItem} />
                ))
                :
                <span className='empty-message'>Your cart is empty</span>
            }
        </div>
        <CustomButton onClick={
            () => { 
                history.push('/checkout'); 
                dispatch(toggleCartHidden());
            }}
        >GO TO CHECKOUT</CustomButton>
    </div>
);


export default withRouter(CartDropdown); //evaluates from inside out
                                                                    // higher order component withRouter() taking:
                                                                    // the HoC connect(mapStateToProps)(CartDropdown) as an argument
