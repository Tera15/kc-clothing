import React from 'react';
import { connect } from 'react-redux';

import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions';

import {
    CheckoutItemContainer,
    ImageContainer,
    ImgComponent,
    NameComponent,
    QuantityContainer,
    PriceContainer,
    ValueContainer,
    RemoveButtonContainer,
    ArrowContainer

 } from './checkout-item.styles';


const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
   const { name, imageUrl, price, quantity } = cartItem
    return(
    <CheckoutItemContainer>
        <ImageContainer>
            <ImgComponent src={imageUrl} alt="item"/>
        </ImageContainer>
        <NameComponent>{name}</NameComponent>
        <QuantityContainer>
        <ArrowContainer onClick={ ()=>removeItem(cartItem) }>&#10094;</ArrowContainer>
          <ValueContainer className="value">{quantity}</ValueContainer> 
        <ArrowContainer onClick={ ()=>addItem(cartItem) }>&#10095;</ArrowContainer>
         
        </QuantityContainer>
        <PriceContainer>{price}</PriceContainer>
        <RemoveButtonContainer onClick={()=> clearItem(cartItem)}>&#10005;</RemoveButtonContainer>
        </CheckoutItemContainer>

);
}
const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item)) 
});

export default connect(
    null, 
    mapDispatchToProps
    )
    (CheckoutItem);