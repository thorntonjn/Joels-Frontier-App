module.exports = function(app) {

  app.get('/', function(req, res){
    console.log("Joel's newPage");
    res.render('index');
  });

  app.get('/newHeader', function (req, res) {
    console.log("new header layout");
    app.set("view options", {layout: "mylayout.ejs"});
    res.render( 'newHeader' );

  });

  app.get('/angular', function (req, res) {
    console.log("new header layout");
    app.set("view options", {layout: "mylayout.ejs"});
    res.render( 'angular' );

  });

  app.get('/journeyman', function(req, res) {
    console.log("new header layout");
    // app.set("view options", {layout: "journeymanlayout.ejs"});
    res.render( 'journeymanlayout' );
    
  })


  app.get('/:page', function(req, res){
    console.log(":page-",req.params.page);
    res.render( req.params.page );
  });



    
};
