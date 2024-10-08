// IMPORTANT: Make sure to import `instrument.js` at the top of your file.
// If you're using ECMAScript Modules (ESM) syntax, use `import "./instrument.js";`
require("./instrument.js");
const Sentry = require("@sentry/node");
const express = require("express");
const app = express();

//? the next 4 modules was used for webhook integrations of clerk
const cors= require('cors');
const dotenv= require('dotenv');
const bodyParser= require('body-parser');
const {Webhook} = require('svix')

//? database connection build-up
const mongoose = require('mongoose')
const ConnectDB = require('./auth/mongoauth.js')
const ClientschemaModel = require('./models/clients.js')

dotenv.config();
app.use(cors());
// All your controllers should live here
app.get("/", function rootHandler(req, res) {
  res.end("Hello world!");
});

app.post('api/webhook', bodyParser.raw({type: 'application/json'}), async function (req,res){
  try {
    const payloadString = req.body.toString();
    const svixHeaders = req.headers;

    const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET_KEY || 'whsec_fxMu8q95R+kU7X//m1q22Oiv5E1fpHZn');
    const evt = wh.verify(payloadString, svixHeaders);
    const { id, ...attributes } = evt.data;
    // Handle the webhooks
    const eventType = evt.type;
    if (eventType === 'user.created') {
      console.log(`User ${id} was ${eventType}`);
      const full_name = `${attributes.first_name} ${attributes.last_name}`
      const email = attributes.email_addresses.email_address
      const ClerkUser_id = attributes.id
      const user = new ClientschemaModel({
        full_name: full_name,
        email: email,
        ClerkUser_id: ClerkUser_id,
      }
      )
      await user.save();
      console.log(user);
    }
    res.status(200).json({
      success: true,
      message: 'Webhook received',
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: err.message,
    }); 
  }
})


// The error handler must be registered before any other error middleware and after all controllers
Sentry.setupExpressErrorHandler(app);

// Optional fallthrough error handler
app.use(function onError(err, req, res, next) {
  // The error id is attached to `res.sentry` to be returned
  // and optionally displayed to the user for support.
  res.statusCode = 500;
  res.end(res.sentry + "\n");
});

app.use(express.json());

ConnectDB();



mongoose.connection.once('open', () => {
  app.listen(5000, () => {
      console.log('server starting at 5000!');
      console.log(process.env)
  });
});