var path = require('path'); //includes the path packages to get the correct path for html

// Routes
// =============================================================

module.exports = function(app){
	// Basic route that sends the user first to the home
	app.get('/', function(req, res){
		//loads the main html page
		res.sendFile(path.join(__dirname + '/../public/home.html'));
	});

	app.get('/survey', function(req, res){
		//loads the survey page
		res.sendFile(path.join(__dirname + '/../public/survey.html'));
	});

	app.get('/all', function(req, res){
		//loads the all friends page
		res.sendFile(path.join(__dirname + '/../public/all.html'));
	});
	//if no matching route found this defaults
	app.use(function(req, res){
			res.sendFile(path.join(__dirname + '/../public/home.html'));
	});
}