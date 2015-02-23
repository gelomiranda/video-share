var models  = require('../models');

module.exports.controller = function(app) {
	app.get('/video', function(req, res) {
		models.Video.find(
		 {
			where: {id: req.query.id},
			include: [ models.Comment ]
		 }
		).then(function(video) {
			res.render('video', {
				video: video
			});
		});
	});
}