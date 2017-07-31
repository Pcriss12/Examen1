(function() {
  'use strict'
  angular
    .module('PlayersApp')
    .controller('PlayerController', PlayerController);

  PlayerController.$inject = ['PlayerService', 'ImageService', 'Upload'];

  function PlayerController(PlayerService, ImageService, Upload) {
    var playerCtrl = this;
    playerCtrl.cloudObj = ImageService.getConfiguration();

    function init() {
      playerCtrl.players = PlayerService.getPlayers();
      playerCtrl.player = {};
    }init();

    playerCtrl.preSave = function() {
      playerCtrl.cloudObj.data.file = document.getElementById("photo").files[0];
      if (playerCtrl.cloudObj.data.file == null) {
        playerCtrl.save();
      }else{
      Upload.upload(playerCtrl.cloudObj)
        .success(function(data) {
          playerCtrl.save(data.url);
        });
      }
    };

    playerCtrl.save = function(pimage) {
      var newPlayer = {
        code: playerCtrl.code,
        firstName: playerCtrl.firstName,
        secondName: playerCtrl.secondName,
        lastName: playerCtrl.lastName,
        secondLastName: playerCtrl.secondLastName,
        nickName: playerCtrl.nickName,
        money: playerCtrl.money,
        photo: pimage
      }
      var Validation = PlayerService.noRepeat(newPlayer);
      if (Validation === false){
        PlayerService.setPlayers(newPlayer);
      };
      init();
      clear();
    };

    playerCtrl.getInfo = function(pPlayer){
      playerCtrl.code = pPlayer.code;
      playerCtrl.firstName = pPlayer.firstName;
      playerCtrl.secondName = pPlayer.secondName;
      playerCtrl.lastName = pPlayer.lastName;
      playerCtrl.secondLastName = pPlayer.secondLastName;
      playerCtrl.nickName = pPlayer.nickName;
      playerCtrl.money = pPlayer.money;
      playerCtrl.photo = pPlayer.photo;
    };

    playerCtrl.update = function(pimage) {
      var EditPlayer = {
        code: playerCtrl.code,
        firstName: playerCtrl.firstName,
        secondName: playerCtrl.secondName,
        lastName: playerCtrl.lastName,
        secondLastName: playerCtrl.secondLastName,
        nickName: playerCtrl.nickName,
        money: playerCtrl.money,
        photo: pimage
      };
      PlayerService.updatePlayer(EditPlayer);
      init();
      clear();
    };

    function clear() {
      playerCtrl.code = '';
      playerCtrl.firstName = '';
      playerCtrl.secondName = '';
      playerCtrl.lastName = '';
      playerCtrl.secondLastName = '';
      playerCtrl.nickName = '';
      playerCtrl.money = '';
      playerCtrl.photo = '';
    };
  };
})();
