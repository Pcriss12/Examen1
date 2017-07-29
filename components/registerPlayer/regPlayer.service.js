(function() {
  'use strict';
  angular
    .module('PlayersApp')
    .service('PlayerService', PlayerService)

  function PlayerService() {
    var publicAPI = {
      setPlayers: _setPlayers,
      getPlayers: _getPlayers,
      updatePlayer: _updatePlayer,
      noRepeat: _noRepeat,
      playerInfo: _playerInfo
    };
    return publicAPI;

    function _setPlayers(pPlayers){
      var playerList = _getPlayers();

      playerList.push(pPlayers)
      localStorage.setItem('lsPlayerList', JSON.stringify(playerList));
    }
    function _getPlayers() {
      var playerList = JSON.parse(localStorage.getItem('lsPlayerList'));
      if (playerList == null) {
        playerList = players;
      }
      return playerList;
    }
    function _updatePlayer(pObjPlayer) {
      var playerList = _getPlayers();
      for (var i = 0; i < playerList.length; i++) {
        if (playerList[i].code == pObjPlayer.code) {
          playerList[i] = pObjPlayer;
        }
      }
      localStorage.setItem('lsPlayerList', JSON.stringify(playerList));
    }
    function _noRepeat(pEditPlayer) {
      var playerList = _getPlayers();
      var Validation = false;
      for (var i = 0; i < playerList.length; i++) {
        if (playerList[i].identification == pEditPlayer.identification) {
          Validation = true;
        }
      }
      return Validation;
    }
    function _playerInfo(pPlayer) {
      var playerList = _getPlayers();
      var playerInfo = [];
      for (var i = 0; i < playerList.length; i++) {
        if (pPlayer == playerList[i].email) {
          playerInfo = playerList[i];
        }
      }
      return playerInfo
    }
  }
})();
