// domain/.netlify/functions/create-payment-intent
exports.handler = async function (event, context) {
  // console.log(event);
  const { cart, shipping_fee, total_amount } = JSON.parse(event.body);

  return {
    statusCode: 200,
    body: 'payment intent',
  };
};
