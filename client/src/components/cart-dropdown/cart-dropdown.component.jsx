import React from 'react';

import { withRouter } from 'react-router-dom';

import { toggleCartHidden } from '../../redux/cart/cart.actions';



import CartItem from '../cart-item/cart-item.component';
import {
        CartDropDownContainer,
        EmptyMessageComponent,
        CartItemsContainer,
        CustomButtonContainer 
    } from './cart-dropdown.styles';

// dispatch is passed as a prop to component from connect if connect is not passed a second argument of mapDispatchToProps
// usefull to not have to write unnecessary mapDispatchToProps
const CartDropdown = ({ cartItems, history, dispatch }) => (
    <CartDropDownContainer>
        <CartItemsContainer>
            {   
                cartItems.length ? // if greater than zero render cartItems otherwise render empty message span
                cartItems.map( cartItem => (
                    <CartItem key={cartItem.id} item={cartItem} />
                ))
                :
                <EmptyMessageComponent>Your Cart Is Empty</EmptyMessageComponent>
            }
        </CartItemsContainer>
        <CustomButtonContainer onClick={
            () => { 
                history.push('/checkout'); 
                dispatch(toggleCartHidden());
            }}
        >GO TO CHECKOUT</CustomButtonContainer>
    </CartDropDownContainer>
);


export default withRouter(CartDropdown); //evaluates from inside out
                                                                    // higher order component withRouter() taking:
                                                                    // the HoC connect(mapStateToProps)(CartDropdown) as an argument
