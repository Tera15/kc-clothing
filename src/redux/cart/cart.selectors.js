import { createSelector } from 'reselect';

// input selector (doesn't use createSelector)

const selectCart = state => state.cart;


// input selectors are passed as params to createSelector()
//in the order they are written
 export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity ,
    0
   )
);