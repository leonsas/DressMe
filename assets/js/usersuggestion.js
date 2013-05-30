function getURLParameter(name) {
	return decodeURI((RegExp(name + '=' + '(.+?)(&|$)').exec(location.search)||[,null])[1]);
}


var geocoder;
var img_urls = [];
var currImgIndex = 0;
$(function() {
	var file;

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
    });


	
	$("#next_img").click(
		function (){
			currentSuggestionIndex+=1;
			setCrowdsourcedImg(currentSuggestionIndex);
		}
		)
	
	$("#previous_img").click(
		function (){
			currentSuggestionIndex-=1;
			setCrowdsourcedImg(currentSuggestionIndex);
		}
		)
	displaySuggestion(0);
	params = getSuggestionParams()
	category = params.category;
	event = params.event;
	getImgsForEvent(category,event); //fix this to actually use category and event;
	
});


