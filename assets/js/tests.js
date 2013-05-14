test( "generate right suggestions", function() {
	suggestions = generateSuggestions('business','interview');
  	ok( suggestion.title == "Business > Interview", "Passed!" );
  	ok( suggestion.suggestions.length == 2, "Passed!" );
});