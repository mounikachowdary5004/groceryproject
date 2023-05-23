// const express = require('express');
// // const { default: Stripe } = require('stripe');
// const Stripe = require('stripe')
// const app = express();
// const paymentRouter = express.Router()

// // const secretKey = 'sk_test_51N8KTZSED1elQBv36tZ01pf49VWC6J8k4h4qrbFgrypePADuTHKKPtoboqjllD9qXzWPCFkA1hy0PfFkvMrmzQwH00Y6x19Vkx'

// // const stripe = require('stripe')(secretKey, {
// //   apiVersion: '2020-08-27',
// //   timeout: 20000,
// //   host: 'api.stripe.com',
// //   port: 443,
// // });
// const stripe = Stripe(process.env.STRIPE_KEY)

// paymentRouter.post('/create-checkout-session', async (req, res) => {
//   const session = await stripe.checkout.sessions.create({
//     line_items: [
//       {
//         price_data: {
//           currency: 'usd',
//           product_data: {
//             name: 'T-shirt',
//           },
//           unit_amount: 2000,
//         },
//         quantity: 1,
//       },
//     ],
//     mode: 'payment',
//     success_url: 'http://localhost:3000/checkout-success',
//     cancel_url: 'http://localhost:3000/cart',
//   });
//   res.redirect(303, session.url);
// });

// module.exports = paymentRouter;
