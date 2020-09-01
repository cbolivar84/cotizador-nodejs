const Openpay  = require("openpay");
const express = require("express");

function createToken(req, res) {
  
  const openpay  = new Openpay('mnqcgrppv7kl3jluue9y', 'sk_5831b35232884c1d89dd6d0203924503',false);

  openpay.setTimeout(20000);
  openpay.cards.create(req.body, function (error, body) {
    if (error) {
      console.error('Error al tokenizar');
      res.status(400).json({
        error,
     });
    } else {
      console.log('tarjeta tokenizada');
      res.json({
               valor: body,
           });
        }
  });

}

module.exports = createToken;
