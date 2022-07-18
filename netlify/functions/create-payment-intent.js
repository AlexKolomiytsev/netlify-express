exports.handler = async function (event, context) {
  const stripe = require("stripe")('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

  const paymentIntent = await stripe.paymentIntents.create({
    amount: 100,
    currency: "eur",
    automatic_payment_methods: {
      enabled: true,
    },
  });

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*", // Allow from anywhere
    },
    body: JSON.stringify({ clientSecret: paymentIntent.client_secret }),
  };
}