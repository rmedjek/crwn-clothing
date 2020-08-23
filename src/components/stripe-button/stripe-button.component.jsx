import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HItnVFin6ubk68OIPBBVezdNk2XWOzP6XQc1TEglTOjlls7BZnFkqFIIHRpsJAGpXnGcQPnsP04d5DLrcYqsrO000kruFuNkj';

    const onToken = token => {
        console.log(token);
        alert('Payment Successfull')
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            allowRememberMe
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;