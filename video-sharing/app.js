var express = require('express')
      ,http = require('http')
      ,path = require('path')
      ,app = express();

// some environment variables
app.set('views', __dirname + '/views');
app.use("/videos", express.static(__dirname + '/videos'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser({
	keepExtensions: true, 
    uploadDir: __dirname + '/videos',
    limit: '2gb'
	}));

app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

app.configure('development', function(){
	  app.use(express.errorHandler());
	  app.locals.pretty = true;
	});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

module.exports = app;