// AndaluSun.js
// ------------


var app = {

	initialize: function() {
		alert("app.initialize function");
		this.bindEvents();
	},
	bindEvents: function() {
		alert("app.bind function");
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
    	alert("device ready");
    	alert("js : " + device.platform);
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
