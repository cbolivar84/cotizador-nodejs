function deviceSessionId(){

       InformacionComercial.datosComercial()
           .success( function ( _response ) {

               var idComercio = atob( _response.idComercio );
               var publick = atob( _response.llavePublica ),
               sandBoxActivo = $scope.model.sandBoxActivo;

               OpenPay.setId( idComercio );
               OpenPay.setApiKey( publick );
               OpenPay.setSandboxMode(sandBoxActivo);

               $scope.model.identificadorAntifraude = OpenPay.deviceData.setup("payment-form", "deviceIdHiddenFieldName");
           } )
           .error( function ( _response ) {
           $scope.errorArea.formPayment.push( 'No se pudo tokenizar la tarjeta' );
        } );