function SessionId(idComercio,publick,sandBoxActivo){

    try { 
        OpenPay.setId(idComercio);
        OpenPay.setApiKey(publick);
        OpenPay.setSandboxMode(sandBoxActivo);
            var deviceSessionId = OpenPay.deviceData.setup("tokenme-form", "deviceSession_id");
            console.log(deviceSessionId);
         }
       catch (e) { console.log('error generando el DeviceSessionId');
        } 
     } 
