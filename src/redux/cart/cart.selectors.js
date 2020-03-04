import { createSelector } from 'reselect';

// input selector (doesn't use createSelector)
// gives access to state.cart from root reducer.
const selectCart = state => state.cart;


// input selectors are passed as params to createSelector()
//in the order they are written
 export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);

//
export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
    );

    //calculating total items in cart
export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity ,
    0
   )
);

//calculating price total for cart
export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => 
     cartItems.reduce(
         (accumulatedQuantity, cartItem) =>
         accumulatedQuantity + cartItem.quantity * cartItem.price,
         0 
     )
);