var models  = require('../models');

module.exports.controller = function(app) {
	
	app.get('/signin', function(req, res) {
		models.Video.findAll().then(function(videos) {
			res.render('signin', {
				videos: videos
			});
		});
	});
	
}