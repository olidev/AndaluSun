
	
	var myScroll;
	function loaded() {
		myScroll = new iScroll('wrapper');
	}
	
	document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
	
	/* * * * * * * *
	 *
	 * Use this for high compatibility (iDevice + Android)
	 *
	 */
	document.addEventListener('DOMContentLoaded', function () { setTimeout(loaded, 200); }, false);
	/*
	 * * * * * * * */
	
	
	/* * * * * * * *
	 *
	 * Use this for iDevice only
	 *
	 */
	//document.addEventListener('DOMContentLoaded', loaded, false);
	/*
	 * * * * * * * */
	
	
	/* * * * * * * *
	 *
	 * Use this if nothing else works
	 *
	 */
	//window.addEventListener('load', setTimeout(function () { loaded(); }, 200), false);
	/*
	 * * * * * * * */
	
	</script>

    <script type="text/javascript" charset="utf-8">

    // Attendre que PhoneGap soit prêt
    //
    document.addEventListener("deviceready", onDeviceReady, false);

    // PhoneGap est prêt
    //
    function onDeviceReady() {
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }

    // Fonction de callback onSuccess, reçoit un objet Position
    //
    function onSuccess(position) {
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

