function getURLParameter(name) {
	return decodeURI((RegExp(name + '=' + '(.+?)(&|$)').exec(location.search)||[,null])[1]);
}

suggestions = [{
	category : "business",
	event : "interview",
	suggestions : ["Sports jacket, button-down shirt, dress pants, dress shoes",
					 "gray suit, tie, dress shoes"]
}, {
	category : "business",
	event : "meeting",
	suggestions : ["button-down shirt, jeans, sneakers", 
					"button-down shirt, khakis, sneakers"]
},




]

$(function() {
	category = getURLParameter('category');
	event = getURLParameter('event');

	for (i in suggestions) {
		console.log(suggestions[i]);
		if (suggestions[i].category == category && suggestions[i].event == event) {
			current_suggestions = suggestions[i].suggestions;
			$("#suggestion_text").html("You could wear "+ current_suggestions[0]);
			console.log("You could wear "+ current_suggestions[0]);
		}

	}
});
