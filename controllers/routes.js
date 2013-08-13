module.exports = function(app) {

  app.get('/', function(req, res){
    console.log("index");
    res.render('index');
  });

  app.get('/I18N', function(req, res){
    res.render('I18N');
  });

  app.get('/restricted', app.restrict(), function(req, res){
    res.send('Yay!');
  });

  app.get('/:page', function(req, res){
    res.render( req.params.page );
  });
    
};
