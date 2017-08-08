(function() {
  'use strict';
  angular
    .module('PlayersApp')
    .service('PlayerService', PlayerService)

  function PlayerService() {
    var players = [
    {
      code: '001',
      name:'Goku',
      nickName: 'Kokkun',
      money: '1500',
      photo:'https://res.cloudinary.com/pabskun/image/upload/v1489535279/goku_cqc9tb.png'
    },
    {
      code: '002',
      name:'Piccolo',
      nickName: 'PikOREO',
      money: '1500',
    photo:'https://res.cloudinary.com/pabskun/image/upload/v1489535276/piccolo_ksxdec.png'
    },
    {
      code: '003',
      name:'Logan',
      nickName: 'Lovezno',
      money: '1500',
      photo:'https://res.cloudinary.com/pabskun/image/upload/v1489535284/lobezno_o1vs9g.png'
    },
    {

      code: '004',
      name:'Bomberman',
      nickName: 'Don Pepe y los Globos',
      money: '1500',
      photo:'https://res.cloudinary.com/pabskun/image/upload/v1489535282/donpepe_x9hksw.png'
    }
    ];

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
      var buyProperty = '';
      var playerList = _getPlayers();
      for (var i = 0; i < playerList.length; i++) {
        if (playerList[i].code == pObjPlayer.player.code) {
          buyProperty = playerList[i].money - pObjPlayer.propertySelected.price;
          playerList[i].money = buyProperty;
        }
      }
      localStorage.setItem('lsPlayerList', JSON.stringify(playerList));
    }
    function _noRepeat(pEditPlayer) {
      var playerList = _getPlayers();
      var Validation = false;
      for (var i = 0; i < playerList.length; i++) {
        if (playerList[i].code == pEditPlayer.code) {
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
