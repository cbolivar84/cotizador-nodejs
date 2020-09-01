function SessionId(idComercio,publick,sandBoxActivo){
    try { 
          OpenPay.setId(idComercio);
          OpenPay.setApiKey(publick);
          OpenPay.setSandboxMode(sandBoxActivo);
          constants.deviceSessionId = OpenPay.deviceData.setup("tokenme-form", "deviceSession_id");
          //return deviceSessionId;
         }
       catch (e) { console.log('error generando el DeviceSessionId');
        }      
     } 
