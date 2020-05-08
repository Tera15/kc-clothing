import React from 'react';

import {
    CartItemContainer,
    ImgContainer,
    ItemDetailsContainer,
    SpanContainer
} from './cart-item.styles';



const CartItem = ({ item: {imageUrl, price, name, quantity} }) => (
<CartItemContainer>
    <ImgContainer src={imageUrl} alt="item"/>
    <ItemDetailsContainer>
        <SpanContainer>{name}</SpanContainer>
        <SpanContainer>
           {quantity} x ${price}
        </SpanContainer>
    </ItemDetailsContainer>
</CartItemContainer>
);

export default CartItem;