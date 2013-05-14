function getURLParameter(name) {
	return decodeURI((RegExp(name + '=' + '(.+?)(&|$)').exec(location.search)||[,null])[1]);
}

suggestions_data = [{
	category : "business",
	event : "interview",
	title : "Business > Interview",
	suggestions : ["button-down shirt, dress pants, dress shoes", "gray suit, tie, dress shoes"]
}, {
	category : "business",
	event : "meeting",
	title : "Business > Meeting with Peers",
	suggestions : ["button-down shirt, jeans, sneakers", "button-down shirt, khakis, sneakers"]
}, {
	category : "business",
	event : "casual",
	title : "Business > Casual",
	suggestions : ["t-shirt, jeans, sneakers", "button-down shirt, jeans, sneakers", "t-shirt, shorts, sneakers"]

}, {
	category : "business",
	event : "happy",
	title : "Business > Happy Hour",
	suggestions : [" t-shirt, jeans, leather shoes", " button-down shirt, jeans, leather shoes", "button-down shirt, jeans, leather shoes"]

}, {
	category : "goingout",
	event : "date",
	title: "Going Out > Date",
	suggestions : [" button-down shirt, dress pants, leather shoes"]

}, {
	category : "goingout",
	event : "clubbing",
	title: "Going Out > Clubbing",
	suggestions : ["polo shirt, belt, jeans, street sneakers"]

}, {
	category : "goingout",
	event : "semiformal",
	title: "Going Out > Semi-Formal",
	suggestions : ["button-down shirt, khakis, boat shoes"]

}, {
	category : "goingout",
	event : "bar",
	title: "Going Out > Bar Hopping",
	suggestions : [" button-down shirt, jeans, sneakers", "button-down shirt, khakis, sneakers", "t-shirt, khakis, sneakers"]

}, {
	category : "athletic",
	event : "gym",
	title: "Working Out > Gym",
	suggestions : ["t-shirt, shorts, gym shoes"]

}, {
	category : "athletic",
	event : "outdoor",
	title: "Working Out > Outdooor",
	suggestions : ["t-shirt, shorts, gym shoes"]

}, {
	category : "traveling",
	event : "beach",
	title: "Traveling > Beach",
	suggestions : ["t-shirt, swim trunks, sunglasses, flip-flops"]

}, {
	category : "traveling",
	event : "skiing",
	title: "Traveling > Skiing",
	suggestions : ["hat, ski-jacket, gloves, snow pants, ski boots"]

}]

condition_accesories = [{
	condition : 'rain',
	suggestion : ['umbrella']
}];

temperature_accesories = [{
	temp_range : [-100, 20],
	suggestion : {
		business : 'warm peacoat',
		goingout : 'heavy jacket',
		athletic : 'warm jacket',

	}
}, {
	temp_range : [20, 40],
	suggestion : {
		business : 'warm peacoat',
		goingout : 'leather jacket',
		athletic : 'warm workout suit',

	}
}, {
	temp_range : [40, 60],
	suggestion : {
		business : 'light blazer',
		goingout : 'leather jacket',
		athletic : 'sweatshirt',

	}
}, {
	temp_range : [60, 140],
	suggestion : {
		business : 'It might get chilly later, bring a light blazer.',
		goingout : 'It might get chilly later, bring a light jacket.',
		athletic : 'It might get chilly later, bring a light sweathshirt.',

	}
}];

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


