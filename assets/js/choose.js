$ ( document ).ready(function() {
	$("#usersug").click(function(){
		document.location.href = "/usersuggestion.html/" + location.search
	})

	$("#appsug").click(function(){
		document.location.href = "/appsuggestion.html/" + location.search
	})
});