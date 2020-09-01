function get_cliente() {

var Openpay = require('openpay');
var express = require("express");  
var app   	= express();
var openpay = new Openpay('mnqcgrppv7kl3jluue9y', 'sk_5831b35232884c1d89dd6d0203924503',false);
openpay.setTimeout(20000);

openpay.customers.get('ac6cvshy6nmkeggubwfo', function(error, customerId) {
    console.log(customerId);
  })
  return customerId;
};
 
module.exports = get_cliente;