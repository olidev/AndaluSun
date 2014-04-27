// AndaluSun.js
// ------------

var app = {

	initialize: function() {
		alert("initialize");
		this.bindEvents();

	},
	bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
    	alert("device ready");
    	alert(device.platform);
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }

};






    // Fonction de callback onSuccess, reçoit un objet Position
    //
    function onSuccess(position) {
    alert(position.coords.latitude);
        var element = document.getElementById('geolocation');
        element.innerHTML = 'Latitude : '                + position.coords.latitude          + '<br/>' +
                            'Longitude : '               + position.coords.longitude         + '<br/>' +
                            'Altitude : '                + position.coords.altitude          + '<br/>' +
                            'Précision : '               + position.coords.accuracy          + '<br/>' +
                            'Précision altitude : ' 	 + position.coords.altitudeAccuracy  + '<br/>' +
                            'Direction : '               + position.coords.heading           + '<br/>' +
                            'Vitesse : '                 + position.coords.speed             + '<br/>';
    }

    // Fonction de callback onError, reçoit un objet PositionError
    //
    function onError(error) {
        alert('code : '    + error.code    + '\n' +
              'message : ' + error.message + '\n');
    }

