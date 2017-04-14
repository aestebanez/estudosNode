module.exports = function(app){

  app.get('/mapas', function(req,res){
    res.render('mapas/listaMapas');
  });

  app.get('/mapas/geolocal', function(req,res){
    res.render('mapas/geoLocal');
  });


}
