suggestions_data = [{
	category : "business",
	event : "interview",
	title : "Business > Interview",
	suggestions : ["button-down shirt, dress pants, dress shoes", "gray suit, tie, dress shoes"," light suit, tie, dress shoes"],
	images : [["button-down_shirt","dress_pants","dress_shoes"],["gray_suit","tie","dress_shoes"],["light_suit","tie","dress_shoes"]]
	}, {
	category : "business",
	event : "meeting",
	title : "Business > Meeting with Peers",
	suggestions : ["button-down shirt, jeans, sneakers", "button-down shirt, khakis, sneakers"," polo, khakis, dress shoes"],
	images : [["button-down_shirt","jeans","sneakers"],["button-down_shirt","khakis","sneakers"],["polo","khakis","dress_shoes"]]
	}, {
	category : "business",
	event : "casual",
	title : "Business > Casual Friday",
	suggestions : ["button-down shirt, khakis, dress shoes", "button-down shirt, jeans, dress shoes"],
	images : [["button-down_shirt","khakis","dress_shoes"],["button-down_shirt","jeans","dress_shoes"]]
},{
	category : "business",
	event : "formal",
	title : "Business > Formal",
	suggestions : [" black suit, dress shoes", "button-down shirt, dress shoes", "dark suit, dress shoes"],
	images : [["black_suit","dress_shoes"],["button-down_shirt","dress_shoes"],["dark_suit","dress_shoes"]]
}, {
	category : "business",
	event : "happy",
	title : "Business > Happy Hour",
	suggestions : [" t-shirt, jeans, leather shoes", " button-down shirt, jeans, leather shoes"],
	images : [["t-shirt","jeans","leather_shoes"],["button-down_shirt","jeans","leather_shoes"]]
}, {
	category : "family",
	event : "reunion",
	title: "Family > Reunion",
	suggestions : ["button-down shirt, jeans, sneakers","button-down shirt, khakis, sneakers"," t-shirt, khakis, sneakers"],
	images : [["button-down_shirt","jeans","sneakers"],["button-down_shirt","khakis","sneakers"],["t-shirt","khakis","sneakers"]]
},{
	category : "family",
	event : "wedding",
	title: "Family > Wedding",
	suggestions : ["black suit, dress shoes"," sports jacket, button-down shirt, dress shoes","t-shirt, shorts, sneakers","dark suit, dress shoes"],
	images : [["black_suit","dress_shoes",],["sports_jacket","button-down_shirt","dress_shoes"],["t-shirt","shorts","sneakers"],["dark_suit","dress_shoes"]]
},{
	category : "casual",
	event : "everyday",
	title: "Casual > Everyday",
	suggestions : ["t-shirt, jeans, sneakers","button-down shirt, jeans, sneakers","t-shirt, shorts, sneakers","long sleeve shirt, jeans, sneakers"],
	images : [["t-shirt","jeans","sneakers"],["button-down_shirt","jeans","sneakers"],["t-shirt","shorts","sneakers"],["long_sleeve_shirt","jeans","sneakers"]]
}, {
	category : "family",
	event : "commencement",
	title: "Family > Commencement",
	suggestions : ["commencement gown, dress shirt, belt, khakis, leather shoes","button-down shirt, jeans, sneakers","t-shirt, shorts, sneakers","commencement gown, dress shirt, belt, dress pants, leather shoes"],
	images : [["commencement_gown","long_sleeve_shirt","belt","khakis","leather_shoes"],["button-down_shirt","jeans","sneakers"],["t-shirt","shorts","sneakers"],["commencement_gown","long_sleeve_shirt","belt","dress_pants","leather_shoes"]]
},{
	category : "eveningwear",
	event : "formal",
	title: "Evening Wear > Formal",
	suggestions : ["button-down shirt, dress pants, leather shoes","dark suit, dress shoes", "light suit, dress shoes"],
	images : [["button-down_shirt","dress_pants","leather_shoes"],["dark_suit","dress_shoes"],["light_suit","dress_shoes"]]
}, {
	category : "eveningwear",
	event : "nightclub",
	title: "Evening Wear > Night Club",
	suggestions : ["iridescent button-down shirt, dress pants, dress shoes"," trendy t-shirt, jeans, leather shoes"," sportcoat, t-shirt, leather shoes"],
	images : [["iridescent_button-down_shirt","dress_pants","dress_shoes"],["trendy_t-shirt","jeans","leather_shoes"],["sportcoat","t-shirt","leather_shoes"]]
}, {
	category : "eveningwear",
	event : "pub",
	title: "Evening Wear > Pub",
	suggestions : ["button-down shirt, jeans, sneakers", "button-down shirt, khakis, sneakers", "t-shirt, khakis, sneakers"],
	images : [["button-down_shirt","jeans","sneakers"],["button-down_shirt","khakis","sneakers"],["t-shirt","khakis","sneakers"]]
}, {
	category : "recreational",
	event : "gymindoor",
	title: "Recreational > Gym > Indoor",
	suggestions : ["t-shirt, shorts, gym shoes"],
	images : [["t-shirt","shorts","gym_shoes"]]
}, {
	category : "recreational",
	event : "gymoutdoor",
	title: "Recreational > Gym > Outdooor",
	suggestions : ["t-shirt, shorts, gym shoes"],
	images : [["t-shirt","shorts","gym_shoes"]]
}, {
	category : "recreational",
	event : "beach",
	title: "Recreational > Beach",
	suggestions : ["t-shirt, swim trunks, sunglasses, flip-flops"],
	images : [["t-shirt","swim_trunks","sunglasses","flip_flops"]]
}, {
	category : "recreational",
	event : "skiing",
	title: "Recreational > Skiing",
	suggestions : ["hat, ski-jacket, gloves, snow pants, ski boots"],
	images : [["hat","ski_jacket","gloves","snow_pants","ski_boots"]]
}]

condition_accesories = [{
	condition : 'rain',
	suggestion : ['umbrella']
}];

temperature_accesories = [{
	temp_range : [-100, 20],
	suggestion : {
		business : 'warm peacoat. It is cold outside',
		family : 'heavy coat.It is cold outside',
		casual : 'heavy coat. It is cold outside',
		eveningwear : 'heavy jacket. It is cold outside',
		recreational : 'warm jacket. It is cold outside'
	}
}, {
	temp_range : [20, 40],
	suggestion : {
		business : 'warm peacoat. It is chilly outside',
		family : 'warm coat. It is chilly outside',
		casual : 'warm coat.It is chilly outside',
		eveningwear : 'leather jacket. It is chilly outside',
		recreational : 'warm workout suit. It is chilly outside',
	}
}, {
	temp_range : [40, 60],
	suggestion : {
		business : ' light blazer. It is slightly chilly outside',
		family : 'warm jacket. It is slightly chilly outside',
		causual : 'jacket. It is slightly chilly outside',
		eveningwear : 'leather jacket. It is slightly chilly outside',
		recreational : 'sweatshirt. It is slightly chilly outside',

	}
}, {
	temp_range : [60, 140],
	suggestion : {
		business : 'It might get chilly later, bring a light blazer.',
		family : 'It might get chilly later, bring a light jacket.',
		casual : 'It might get chilly later, bring a sweatshirt.',
		eveningwear : 'It might get chilly later, bring a light jacket.',
		recreational : 'It might get chilly later, bring a light sweathshirt.',

	}
}];
