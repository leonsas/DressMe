
function getSuggestionParams(){
		category = getURLParameter('category');
		event = getURLParameter('event');
	return {event: event, category: category}
}

function generateSuggestions(category, event){
		for (i in suggestions_data) {

		if (suggestions_data[i].category == category && suggestions_data[i].event == event) {
			current_suggestions = suggestions_data[i].suggestions;
			title = suggestions_data[i].title;
			return {suggestions: current_suggestions, title: title}
		}

	}
}
	
function displaySuggestion(indexOfSuggestion){
	suggestion_params = getSuggestionParams()
	suggestions =  generateSuggestions(suggestion_params.category, suggestion_params.event);
	title = suggestions.title;
	i = indexOfSuggestion%suggestions.suggestions.length
	current_suggestion = suggestions.suggestions[i]
	$("#suggestion_text").html("You could wear a " + current_suggestion + ".");
	$('#category').html(title);
	
}



function displayWeatherAccesories(currentTemp, icon_type) {
	console.log(currentTemp);
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
	console.log("accessory: " + accessory)
	if (accessory != '' && accessory != undefined) {
		if (currentTemp > 61) {
			accessory_string = accessory;
		} else {
			accessory_string = "Don't forget your " + accessory + "!";
		}
		$('#weather_accessory_suggestion').html(accessory_string);
	}
};
