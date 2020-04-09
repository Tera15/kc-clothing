import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectCartItems } from '../../redux/cart/cart.selectors';

import CartDropdown from './cart-dropdown.component';

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

const CartDropDownContainer = compose(
    connect(mapStateToProps)
)(CartDropdown);

export default CartDropDownContainer;