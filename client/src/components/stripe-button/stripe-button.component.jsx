import React from 'react';
import axios from 'axios'
import StripeCheckout from 'react-stripe-checkout';

//stripe wants price value in cents
//price property passed in from total on checkout.component
const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_DPyn4fA8AKwcrucE9nQxX6AN00Nk04rO8r';

    const onToken = token => {
        // token gets passed to backend to process payment.
      axios({
          url:'payment',
          method:'post',
          data: {
              amount: priceForStripe,
              token
          }
      }).then(response => {
          alert('payment success!')
      }).catch((error) => {
          console.log('payment error: ', JSON.parse(error.message))
          alert('There was an issue with your payment. Please make sure you are using the provided credit card information.')
      })
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