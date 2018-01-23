document.addEventListener("DOMContentLoaded", function(){
	var repoNames = [];
	fetch('https://api.github.com/users/ToddPaben/repos').then(function(response){
		console.log(response.json());
		return 
	})
})