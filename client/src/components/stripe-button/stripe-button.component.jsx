import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_6yUv5aCl2OEjjwTcyYNkz9CW00i0yMc6Lt';

    const onToken = token => {
       axios({
           url: 'payment',
           method: 'post',
           data: {
               amount: priceForStripe,
               token
           }
       }).then(response => {
           alert('Payment Accepted Successfully')
       }).catch(error => {
           console.log('Payment error: ', JSON.parse(error));
           alert(
               'There was an issue with your payment. Please ensure you use the provided credit card'
           );
       });
    };

    return (
        <StripeCheckout
        label="Pay now"
        name='React Ecommerce'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        />
    )

}

export default StripeCheckoutButton;
