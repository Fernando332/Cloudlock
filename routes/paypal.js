const express = require('express');
const router = express.Router();
const paypal = require('paypal-rest-sdk');

paypal.configure({
  mode: 'sandbox',
  client_id: 'TU_CLIENT_ID_DE_PAYPAL',
  client_secret: 'TU_CLIENT_SECRET_DE_PAYPAL'
});

router.post('/pagar', (req, res) => {
  // Lógica para crear un pago con PayPal
});

module.exports = router;
