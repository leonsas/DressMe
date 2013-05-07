function getURLParameter(name) {
	return decodeURI((RegExp(name + '=' + '(.+?)(&|$)').exec(location.search)||[,null])[1]);
}

suggestions = [{
	category : "business",
	event : "interview",
	suggestions : ["sports jacket, button-down shirt, dress pants, dress shoes",
					 "gray suit, tie, dress shoes"]
}, {
	category : "business",
	event : "meeting",
	suggestions : ["button-down shirt, jeans, sneakers", 
					"button-down shirt, khakis, sneakers"]
}, {
	category : "business",
	event : "casual",
	suggestions : ["t-shirt, jeans, sneakers", "button-down shirt, jeans, sneakers",
	 "t-shirt, shorts, sneakers"]

}, {
	category : "business",
	event : "happy",
	suggestions : ["sports jacket, t-shirt, jeans, leather shoes", 
	"sports jacket, button-down shirt, jeans, leather shoes", 
	"button-down shirt, jeans, leather shoes"]

}, {
	category : "goingout",
	event : "date",
	suggestions : ["sports jacket, button-down shirt, dress pants, leather shoes"]

}, {
	category : "goingout",
	event : "clubbing",
	suggestions : ["polo shirt, belt, jeans, street sneakers"]

}, {
	category : "goingout",
	event : "semiformal",
	suggestions : ["button-down shirt, khakis, boat shoes"]

}, {
	category : "goingout",
	event : "bar",
	suggestions : [" button-down shirt, jeans, sneakers", "button-down shirt, khakis, sneakers",
	"t-shirt, khakis, sneakers"]

}, {
	category : "athletic",
	event : "gym",
	suggestions : ["t-shirt, shorts, gym shoes"]

}, {
	category : "athletic",
	event : "outdoor",
	suggestions : ["t-shirt, shorts, gym shoes"]

}, {
	category : "traveling",
	event : "beach",
	suggestions : ["t-shirt, swim trunks, sunglasses, flip-flops"]

}, {
	category : "traveling",
	event : "skiing",
	suggestions : ["hat, ski-jacket, gloves, snow pants, ski boots"]

}]

$(function() {
	category = getURLParameter('category');
	event = getURLParameter('event');

	for (i in suggestions) {
		console.log(suggestions[i]);
		if (suggestions[i].category == category && suggestions[i].event == event) {
			current_suggestions = suggestions[i].suggestions;
			$("#suggestion_text").html("You could wear a "+ current_suggestions[0] + ".");
			console.log("You could wear "+ current_suggestions[0]);
		}

	}
});
