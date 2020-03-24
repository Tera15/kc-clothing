import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

//stripe wants price value in cents
//price property passed in from total on checkout.component
const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_DPyn4fA8AKwcrucE9nQxX6AN00Nk04rO8r';

    const onToken = token => {
        // token gets passed to backend to process payment.
        console.log(token);
        alert('payment successful')
    };

    return (
        <StripeCheckout 
        label ='Pay Now'  
        name='KC Clothing Ltd.'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total is ${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;