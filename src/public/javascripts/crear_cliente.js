var Openpay = require('openpay');
var openpay = new Openpay('mnqcgrppv7kl3jluue9y', 'sk_5831b35232884c1d89dd6d0203924503',false);
openpay.setTimeout(20000);
var newCustomer = {
  "name":"John",
  "email":"johndoe@example.com",
  "last_name":"Doe",
  "address":{
    "city":"Queretaro",
    "state":"Queretaro",
    "line1":"Calle Morelos no 10",
    "line2":"col. san pablo",
    "postal_code":"76000",
    "country_code":"MX"
  },
  "phone_number":"44209087654"
};

openpay.customers.create(newCustomer, function(error, body) {
    error;    // null if no error occurred (status code != 200||201||204)
    body;     // contains the object returned if no error occurred (status code == 200||201||204)
    console.log(body);
});