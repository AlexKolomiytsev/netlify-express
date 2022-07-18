exports.handler = async function (event, context) {
  const stripe = require("stripe")('sk_test_4eC39HqLyjWDarjtT1zdp7dc');
  // const stripe = require("stripe")('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');

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 100,
      currency: "usd",
      automatic_payment_methods: {
        enabled: true,
      },
    });

    console.log('paymentIntent', paymentIntent);


    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*", // Allow from anywhere
      },
      body: JSON.stringify({ clientSecret: paymentIntent.client_secret }),
    };
  } catch (error) {
    console.log('error', error);
    return {
      statusCode: 400,
      headers: {
        "Access-Control-Allow-Origin": "*", // Allow from anywhere
      },
      body: null
    };
  }

}