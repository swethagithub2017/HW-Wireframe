$(document).ready(function() {
	// youtube key
    var apiKey = "AIzaSyAGlrgn7TPlpZMhX5rEXyLTPtX5boTIKA8";

    function displayRecipeVideo() {
		recipeInput = "beef lasagna";
		var queryURL = "https://www.googleapis.com/youtube/v3/search?key=AIzaSyAGlrgn7TPlpZMhX5rEXyLTPtX5boTIKA8&part=snippet&maxResults=3&type=video&videoEmbeddable=true&q=recipe " + recipeInput + "&alt=json";               
		
		$.ajax({
			url: queryURL,
			method: "GET"
		}).done(function(response) {

			$("#recipe-video").empty();
			
			console.log(queryURL);
			
			for (i = 0; i < response.items.length; i++) {
				
				var videoDiv = $("<div>");

				var videoTitle = response.items[i].snippet.title;
				var p = $("<p>").text(videoTitle);

				var videoId = response.items[i].id.videoId;
				var videoPlayer = $("<iframe>");
				videoPlayer.attr("src", "https://www.youtube.com/embed/" + response.items[i].id.videoId +"?autoplay=0");
				videoPlayer.attr("width", "640");
				videoPlayer.attr("height", "360");	
				videoDiv.append(p);
				videoDiv.append(videoPlayer);
				$("#recipe-video").append(videoDiv);
			}	

		});
	};

	$("#runButton").on("click", function(event) {	
		displayRecipeVideo();		
	});

// youtube iframe
//  
// 	<div>
//  <iframe id="ytplayer" type="text/html" width="640" height="360"
//  	src="https://www.youtube.com/embed/w8QjQL-LWGE?autoplay=0&origin=http://example.com"
//  	frameborder="0">
// 	</iframe>
//  </div>

});