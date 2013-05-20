
suggestions_data = [{
	category : "business",
	event : "interview",
	title : "Business > Interview",
	suggestions : ["button-down shirt, dress pants, dress shoes", "gray suit, tie, dress shoes"," light suit, tie, dress shoes"]
}, {
	category : "business",
	event : "meeting",
	title : "Business > Meeting with Peers",
	suggestions : ["button-down shirt, jeans, sneakers", "button-down shirt, khakis, sneakers"," polo, khakis, dress shoes"]
}, {
	category : "business",
	event : "casual",
	title : "Business > Casual Friday",
	suggestions : ["button-down, khakis, dress shoes", "button-down shirt, jeans, dress shoes"]

},{
	category : "business",
	event : "formal",
	title : "Business > Formal",
	suggestions : [" black suit, dress shoes", "button-down shirt, dress shoes", "dark suit, dress shoes"]

}, {
	category : "business",
	event : "happy",
	title : "Business > Happy Hour",
	suggestions : [" t-shirt, jeans, leather shoes", " button-down shirt, jeans, leather shoes"]

}, {
	category : "family",
	event : "familyevent",
	title: "Family Event",
	suggestions : [" button-down shirt, jeans, sneakers","button-down shirt, khakis, sneakers"," t-shirt, khakis, sneakers"]

},{
	category : "wedding",
	event : "wedding",
	title: "Wedding",
	suggestions : ["black suit, dress shoes"," sports jacket, button-down shirt, dress shoes","t-shirt, shorts, sneakers","dark suit, dress shoes"]

},{
	category : "casual",
	event : "everyday",
	title: "Casual > Everyday",
	suggestions : ["t-shirt, jeans, sneakers","button-down shirt, jeans, sneakers","t-shirt, shorts, sneakers","long sleeve shirt, jeans, sneakers"]

}, {
	category : "commencement",
	event : "commencement",
	title: "Commencement",
	suggestions : ["commencement gown, dress shirt, belt, khakis, leather shoes","button-down shirt, jeans, sneakers","t-shirt, shorts, sneakers","commencement gown, dress shirt, belt, dress pants, leather shoes"]

},{
	category : "eveningwear",
	event : "formal",
	title: "Evening Wear > Formal",
	suggestions : ["button-down shirt, dress pants, leather shoes","dark suit, dress shoes", "light suit, dress shoes"]

}, {
	category : "eveningwear",
	event : "nightclub",
	title: "Evening Wear > Night Club",
	suggestions : ["iridescent button-down shirt, dress pants, dress shoes"," trendy t-shirt, jeans, leather shoes"," sportcoat, t-shirt, leather shoes"]

}, {
	category : "eveningwear",
	event : "pub",
	title: "Evening Wear > Pub",
	suggestions : ["button-down shirt, jeans, sneakers", "button-down shirt, khakis, sneakers", "t-shirt, khakis, sneakers"]

}, {
	category : "recreational",
	event : "gymindoor",
	title: "Recreational > Gym > Indoor",
	suggestions : ["t-shirt, shorts, gym shoes"]

}, {
	category : "recreational",
	event : "gymoutdoor",
	title: "Recreational > Gym > Outdooor",
	suggestions : ["t-shirt, shorts, gym shoes"]

}, {
	category : "recreational",
	event : "beach",
	title: "Recreational > Beach",
	suggestions : ["t-shirt, swim trunks, sunglasses, flip-flops"]

}, {
	category : "recreational",
	event : "skiing",
	title: "Recreational > Skiing",
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
