var express = require('express');
var router = express.Router();
var playersController = require('./players.controller.js');

router.param('id',function(req, res, next, id){
  req.body.id = id;
  next();
});


//Declaracion de las rutas

router.route('/playersPost')
  .post(function(req, res){
    playersController.save(req,res);
 });

router.route('/playersGet')
  .get(function(req, res){
      playersController.findAll(req,res);
 });

router.route('/playersUpdate')
  .put(function(req, res){
    playersController.update(req,res);
 });



// Se exporta el modulo
module.exports = router;