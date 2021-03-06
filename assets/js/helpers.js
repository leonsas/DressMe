function getSuggestionParams() {
	category = getURLParameter('category');
	event = getURLParameter('event');
	return {
		event : event,
		category : category
	}
}

function generateSuggestions(category, event) {
	for (i in suggestions_data) {

		if (suggestions_data[i].category == category && suggestions_data[i].event == event) {
			current_suggestions = suggestions_data[i].suggestions;
			title = suggestions_data[i].title;
			picture_names = suggestions_data[i].images;
			return {
				suggestions : current_suggestions,
				title : title,
				images: picture_names
			}
		}

	}
}

function displaySuggestion(indexOfSuggestion) {
	suggestion_params = getSuggestionParams()
	suggestions = generateSuggestions(suggestion_params.category, suggestion_params.event);
	title = suggestions.title;
	i = indexOfSuggestion % suggestions.suggestions.length
	current_suggestion = suggestions.suggestions[i]
	picture_titles = suggestions.images[i]
	$("#suggestion_text").html("You could wear a " + current_suggestion + ".");
	$('#category').html(title);
	var imageHTML = '';
	for (j in picture_titles)
	{
	imageHTML = imageHTML + "<img src=\"assets/img/" + picture_titles[j] + ".jpg\">";
	}
	$("#pictures").html(imageHTML);
}

function displayWeatherAccesories(currentTemp, icon_type) {
	console.log(currentTemp);
	console.log(icon_type);
	
	category = getURLParameter('category');
	var accessory = '';
	for (i in temperature_accesories) {
		if (currentTemp >= temperature_accesories[i].temp_range[0] && currentTemp < temperature_accesories[i].temp_range[1]) {
			console.log(i + " " + currentTemp);
			console.log(category);
			console.log(temperature_accesories[i]);
			accessory = temperature_accesories[i].suggestion[category];
			break;
		}
	}

	for (i in condition_accessories){
		if (icon_type == condition_accessories[i].condition) {
			console.log(i + " " + icon_type);
			console.log(category);
			console.log(condition_accessories[i]);
			condition_accessory = condition_accessories[i].suggestion;
			break;
		}
	}

	console.log("accessory: " + accessory);

	if (accessory != '' && accessory != undefined) {
		if (currentTemp > 61) {
			accessory_string = accessory;
		} else {
			accessory_string = "Don't forget your " + accessory + "!";
		}
		if (icon_type == "rain" || icon_type == "snow"){
			accessory_string = accessory_string + "<br>And don't forget your " + condition_accessory +
			 " because it might " + icon_type +"!";
		}
		$('#weather_accessory_suggestion').html(accessory_string);
	}
};

function saveImgURLToParse(url, category, event) {
	var image = Parse.Object.extend("image");
	var curr_img = new image();

	curr_img.set("img_url", url);
	curr_img.set("category", category);
	curr_img.set("event", event);
	curr_img.save(null, {
		success : function(curr_img) {
			// The object was saved successfully.
			console.log("Picture uploaded succesufly");
			$("#picture_uploaded_alert").css('display','inline');
		},
		error : function(curr_img, error) {
			// The save failed.
			// error is a Parse.Error with an error code and description.
			console.log("Error creating parse obj: "+ error)
		}
	});

}

function getImgsForEvent(category, event) {
	
	var image = Parse.Object.extend("image");
	var query = new Parse.Query(image);
	query.equalTo("category", category);
	query.equalTo("event", event);
	query.descending("thumbs_up");
	console.log("querying for:" + event + " " + category);
	query.find({
		success : function(results) {
			
			for(i =0;i<results.length;i++){
				url = results[i].get("img_url")
				console.log(url);
				
				img_urls.push(url);
				parseImages.push(results[i]);
			}
				setCrowdsourcedImg(0);
		},
		error : function(error) {
			alert("Error: " + error.code + " " + error.message);
		}
	});
}


function setCrowdsourcedImg(img_index){
	$("#thumbsUp").prop("disabled",false);
	$("#thumbsDown").prop("disabled",false);
	img_index = img_index % img_urls.length;
	url = img_urls[img_index];
	$("#crowdsourced_img_placeholder").attr("src",url);
	$("#upCount").text(parseImages[img_index].get("thumbs_up"));
	$("#downCount").text(parseImages[img_index].get("thumbs_down"));
}
