// AndaluSun.js
// ------------


var app = {

	initialize: function() {
		alert("initialize function");
		this.bindEvents();
	},
	bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
    	alert("device ready");
    	//uuid = device.uuid;
    	alert(uuid);
    	alert(device.platform);
    	pushNotification = window.plugins.pushNotification;
    	
    	
    	
    	//REGISTERING TO PUSH SERVICES
    	if ( device.platform == 'android' || device.platform == 'Android' ){
			pushNotification.register(
				successHandler,
				errorHandler, {
					"senderID":"62687688475",
					"ecb":"onNotificationGCM"
				});
		}
		else{
			pushNotification.register(
				tokenHandler,
				errorHandler, {
					"badge":"true",
					"sound":"true",
					"alert":"true",
					"ecb":"onNotificationAPN"
				});
		}  	
    	
    	
    	
    	
    	
    	//Only for iOS 7 in the Phonegap Project
        if (parseFloat(window.device.version) >= 7.0) 
		{
			$('div#header').css('padding-top','20px');
			$('div#header .btn').css('margin-top','20px');
			$('div#header .location').css('margin-top','20px');
			$('div#sectionContent').css('margin-top','30px');
			$('div#wrapper').css('top','70px');
		}
    }

};




var app22 = {


	initialize: function() {
		alert("initialize function");
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