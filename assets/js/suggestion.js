function getURLParameter(name) {
	return decodeURI((RegExp(name + '=' + '(.+?)(&|$)').exec(location.search)||[,null])[1]);
}

var geocoder;
$(function() {
	/*
	function initialize() {
	geocoder = new google.maps.Geocoder();
	}

	function codeLatLng(lat, lng) {
	var latlng = new google.maps.LatLng(lat, lng);
	geocoder.geocode({
	'latLng' : latlng
	}, function(results, status) {
	if (status == google.maps.GeocoderStatus.OK) {
	if (results[1]) {
	$('#current_location').text(results[2].formatted_address);
	} else {
	console.log('No results found');
	}
	} else {
	console.log('Geocoder failed due to: ' + status);
	}
	});
	}
	*/
	//key from forecast.io
	var baseURL = 'https://api.forecast.io/forecast/fc590758007d8f0eb51877e6883ffda1/';

	function getGeoLocation() {
		//check if geolocation is enabled (i.e browser supports it, and users enables it.)
		if (navigator.geolocation) {
			//use HTML5 geolocation API with our callback to show the position
			navigator.geolocation.getCurrentPosition(getConditions);
		} else {
			alert("geolocation not supported");
		}
	};

	function getConditions(position) {
		latitude = position.coords.latitude;
		longitude = position.coords.longitude;
		/*initialize();
		 codeLatLng(latitude, longitude);
		 */
		queryURL = baseURL + latitude + ',' + longitude + '?exclude=minutely,hourly,alerts,flags';
		//GET call that returns the geolookup info
		$.ajax({
			url : queryURL,
			dataType : "jsonp",
			success : function(data) {
				console.log(data);
				currentTemp = Math.round(data.currently.temperature);
				$("#current_feels_like").text('Feels like ' + currentTemp + '\u00B0 F');
				icon_type = data.daily.icon;
				displayWeatherAccesories(currentTemp, icon_type);

			}
		});

	};

	
	displaySuggestion()
	getGeoLocation();
});


