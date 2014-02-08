
/**
 * Module dependencies.
 */

var express = require('express'),
    http = require('http'),
    path = require('path');

var app = express();

// all environments
app.configure(function() {
    app.set( 'port', process.env.PORT || 3000 );
    app.set( 'views', __dirname + '/views' );
    app.use( express.favicon());
    app.use( express.logger('dev') );
    app.use( express.bodyParser() );
    app.use( express.methodOverride()) ;
    app.use( express.cookieParser('miles2gob4isleep') );
    app.use( express.session({ secret: 'miles2gob4isleep' }) );
    app.use( app.router );
    //app.use( require('less-middleware')({ src: __dirname + '/public' }) );
    app.use( express.static( path.join( __dirname, 'app' ) ) );
});


// development only
if ( 'development' == app.get('env') ) {
  app.use( express.errorHandler() );
}

//
// When no route is given, redirect to Tm Mobile's main (and only) page.
//
app.get('/', function(req, res, next ) {
    res.redirect('/index.html');
});

http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});
