const express = require('express');
const cors = require('cors');
const port = 8000;
const bp = require("body-parser");
const crypto = require('crypto');
const squareConnect = require('square-connect');


const dbname = "products";


const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());


const accessToken = 'EAAAEPwc8JbsUnqofV1sr9SAd4uy2fKZzRLvVQEBtYIj8q8ZZuMXf_lttyHQvGpT';


// Set Square Connect credentials and environment
const defaultClient = squareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
const oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = accessToken;

// Set 'basePath' to switch between sandbox env and production env
// sandbox: https://connect.squareupsandbox.com
// production: https://connect.squareup.com
defaultClient.basePath = 'https://connect.squareupsandbox.com';

app.post('/process-payment', async (req, res) => {
    const request_params = req.body;
    price = parseInt(request_params.price);
    console.log(request_params, "----------------------")
  // length of idempotency_key should be less than 45
  const idempotency_key = crypto.randomBytes(22).toString('hex');

  // Charge the customer's card
  const payments_api = new squareConnect.PaymentsApi();
    const request_body = {
    source_id: request_params.nonce,
    amount_money: {
      amount: price,
      currency: 'USD'
        },
    billing_address: {
      address_line_1: "gfhgf",
      country: "AU",
      first_name: "kuhk",
      last_name: "khg",
      locality: "tulsa",
      postal_code: "77777"
    },
    idempotency_key: idempotency_key
  };

  try {
    const response = await payments_api.createPayment(request_body);
    res.status(200).json({
      'title': 'Payment Successful',
      'result': response
    });
  } catch(error) {
    res.status(500).json({
      'title': 'Payment Failure',
      'result': error.response.text
    });
  }
});



require("./server/config/database.config")(dbname);
require("./server/routes/routes")(app);
require("./server/routes/order.routes")(app);



app.listen(port, () => console.log(`Server has connected successfully ++++++++++++++ on port: ${port}`));
