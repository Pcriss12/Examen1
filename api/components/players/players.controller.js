//Requerimos el modelo  de usuarios
var Player = require('./players.model.js');

module.exports.save = function(req,res){ //exporta el controlador

         var newPlayer = new Player({
          code:  req.body.code,
          name:  req.body.name,
          nickName:  req.body.nickName,
          money:  req.body.money,
          photo:  req.body.photo
          
        });

        newPlayer.save(function(err){
          if(err){
            res.json({success:false,msg:'El usuario ya existe.'});
          }else {
            res.json({success:true,msg:'Se ha registrado correctamente.'});
          }
        });    

}

module.exports.findAll = function(req,res){
  Player.find().then(function(players){
    res.send(players);
  });
}

module.exports.update = function(req,res){
  console.log(req.body.id);
  Player.findByIdAndUpdate(req.body._id,{$set:req.body}).then(function(data){
    res.json({success:true,msg:'Se ha actualizado correctamente.'});
  });
}

