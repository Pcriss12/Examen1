(function() {
  'use strict'
  angular
    .module('PlayersApp')
    .controller('PlayerController', PlayerController);

  PlayerController.$inject = ['PlayerService', 'ImageService', 'Upload'];

  function PlayerController(PlayerService, ImageService, Upload) {
    var playerCtrl = this;
    loadPlayer();

    playerCtrl.cloudObj = ImageService.getConfiguration();

    function loadPlayer() {
      PlayerService.getPlayers().then(function(response) {
        playerCtrl.players = response.data;
      })
    }

    function init() {
      playerCtrl.players = [];
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
        name: playerCtrl.name,
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
      playerCtrl._id = pPlayer._id;
      playerCtrl.code = pPlayer.code;
      playerCtrl.name = pPlayer.name;
      playerCtrl.nickName = pPlayer.nickName;
      playerCtrl.money = pPlayer.money;
      playerCtrl.photo = pPlayer.photo;
    };

    playerCtrl.update = function(pimage) {
      var EditPlayer = {
        _id: playerCtrl._id,
        code: playerCtrl.code,
        name: playerCtrl.name,
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
      playerCtrl.name = '';
      playerCtrl.nickName = '';
      playerCtrl.money = '';
      playerCtrl.photo = '';
    };
  };
})();
