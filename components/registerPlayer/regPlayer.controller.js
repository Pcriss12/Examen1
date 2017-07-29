(function() {
  'use strict'
  angular
    .module('PlayersApp')
    .controller('PlayerController', PlayerController);

  PlayerController.$inject = ['PlayerService'];

  function PlayerController(PlayerService) {
    var playerCtrl = this;

    function init() {
      playerCtrl.players = PlayerService.getPlayers();
      playerCtrl.player = {};
    }init();

    playerCtrl.save = function(pNewPlayer) {
      var newPlayer = {
        code: playerCtrl.code,
        firstName: playerCtrl.firstName,
        secondName: playerCtrl.secondName,
        lastName: playerCtrl.lastName,
        secondLastName: playerCtrl.secondLastName,
        nickName: playerCtrl.nickName,
        money: playerCtrl.money,
        photo: playerCtrl.photo
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

    playerCtrl.update = function() {
      var EditPlayer = {
        code: playerCtrl.code,
        firstName: playerCtrl.firstName,
        secondName: playerCtrl.secondName,
        lastName: playerCtrl.lastName,
        secondLastName: playerCtrl.secondLastName,
        nickName: playerCtrl.nickName,
        money: playerCtrl.money,
        photo: playerCtrl.photo
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
