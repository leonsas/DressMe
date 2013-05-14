
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
