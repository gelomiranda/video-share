var models  = require('../models');

module.exports.controller = function(app) {
	
	app.get('/', function(req, res) {
		models.Video.findAll().then(function(videos) {
			res.render('index', {
				videos: videos
			});
		});
	});
	
}