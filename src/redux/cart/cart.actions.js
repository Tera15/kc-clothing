import CartActionTypes from './cart.types';
//payload is optional and not needed in this case so it is omitted.
export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN 
})