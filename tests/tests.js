test( "generate right suggestions", function() {
	suggestions = generateSuggestions('business','interview');
  	ok( suggestions.title == "Business > Interview", "Passed!" );
  	ok( suggestions.suggestions.length == 2, "Passed!" );
  	//ok( 1 == 2, "this shouldn't pass" );
});