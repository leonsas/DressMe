function getURLParameter(name) {
	return decodeURI((RegExp(name + '=' + '(.+?)(&|$)').exec(location.search)||[,null])[1]);
}


var geocoder;
var img_urls = [];
var currImgIndex = 0;
var geocoder;
var parseImages = [];

$(function() {
	var file;

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

    // Set an event listener on the Choose File field.
    $('#fileselect').bind("change", function(e) {
      var files = e.target.files || e.dataTransfer.files;
      // Our file var now holds the selected file
      file = files[0];
    });

    // This function is called when the user clicks on Upload to Parse. It will create the REST API request to upload this image to Parse.
    $('#uploadbutton').click(function() {
      var serverUrl = 'https://api.parse.com/1/files/' + file.name;

      $.ajax({
        type: "POST",
        beforeSend: function(request) {
          request.setRequestHeader("X-Parse-Application-Id", 'sN8c1dHWntZ7BJQTLrRydYGmXqE3oYRKCBk99NdE');
          request.setRequestHeader("X-Parse-REST-API-Key", 'EWROsLb90PUOTq4S4gurZ9leDFDUdjryIxWPXCpZ');
          request.setRequestHeader("Content-Type", file.type);
        },
        url: serverUrl,
        data: file,
        processData: false,
        contentType: false,
        success: function(data) {
          console.log("File available at: " + data.url);
          params = getSuggestionParams()
          category = params.category;
          event = params.event;
          saveImgURLToParse(data.url, category, event);
        },
        error: function(data) {
          var obj = jQuery.parseJSON(data);
          alert(obj.error);
        }
      });
    }
	);
	
	$('#thumbsUp').click(function() {
		currObject = parseImages[currImgIndex];
		currObject.increment('thumbs_up');
		currObject.save(null,{
    success: function(updatedObj) {
      $("#upCount").text(updatedObj.get("thumbs_up"));
	  $("#thumbsUp").prop("disabled",true);
	  $("#thumbsDown").prop("disabled",true);
    },
    error: function(error) {
      $("#feedback_alert").css('display','inline');
    }
  });
	});
	
	$('#thumbsDown').click(function() {
		currObject = parseImages[currImgIndex];
		currObject.increment('thumbs_down');
		currObject.save(null,{
    success: function(updatedObj) {
      $("#downCount").text(updatedObj.get("thumbs_down"));
	  $("#thumbsUp").prop("disabled",true);
	  $("#thumbsDown").prop("disabled",true);
    },
    error: function() {
      $("#feedback_alert").css('display','inline');
    }
  });
	});
	 
	$("#next_img").click(
		function (){
			currImgIndex+=1;
			setCrowdsourcedImg(currImgIndex);
		}
		)
	
	$("#previous_img").click(
		function (){
			currentSuggestionIndex-=1;
			setCrowdsourcedImg(currImgIndex);
		}
		)
  getGeoLocation();
	displaySuggestion(0);
	params = getSuggestionParams()
	category = params.category;
	event = params.event;
	getImgsForEvent(category,event); //fix this to actually use category and event;
	
});


