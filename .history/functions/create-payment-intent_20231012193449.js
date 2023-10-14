// domain/.netlify/functions/create-payment-intent
require('dotenv').config();
// sk_test_7mJuPfZsBzc3JkrANrFrcDqC
const stripe = require('stripe')(process.env.REACT_APP_STRIPE_SECRET_KEY);

exports.handler = async function (event, context) {
  if (event.body) {
    const { cart, shipping_fee, total_amount } = JSON.parse(event.body);
    const calculateOrderAmount = () => {
      return shipping_fee + total_amount;
    };
    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: calculateOrderAmount(),
        currency: 'usd',
      });
      return {
        statusCode: 200,
        body: JSON.stringify({ clientSecret: paymentIntent.client_secret }),
      };
    } catch (error) {
      statusCode: 500,
      body: JSON.stringify({error: error.message})
    }
  }
  return {
    statusCode: 200,
    body: 'Create Payment Intent',
  };
};
