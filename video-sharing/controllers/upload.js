var models  = require('../models');

  /*var deleteAfterUpload = function(path) {
    setTimeout( function(){
      fs.unlink(path, function(err) {
        if (err) console.log(err);
        console.log('file successfully deleted');
      });
    }, 60 * 1000);
  };*/

module.exports.controller = function(app) {

  app.get('/upload', function(req, res) {
      // any logic goes here
      res.render('upload');
  });
  
  
  app.post('/upload/saveinfo', function(req, res) {
	  console.log('params: ' + JSON.stringify(req.body));
	  
	  var tagNames = req.body.tags;
	  
	  models.Video.create({
		  	title: req.body.title,
		  	filename: req.body.filename,
		  	tags:tagNames
		}).then(function(video) {
			res.render('upload', {
				//video: video
			 });
			
		});
  });
  
  app.post('/upload', function(req, res) {
	    console.log('begin /upload');
	    
	    var path = req.files.myFile.path.split('\\');
	    
	  	res.send({
	  		filename: path[path.length-1]
	  	});
	  
	});
  
}