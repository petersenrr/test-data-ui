module.exports = function(app) {
  app.get('/', function(req, res){
    res.render("index", {title: 'It Works'});
  });

  app.get('/:page', function(req, res){
    res.render(req.params.page);
  });
}
