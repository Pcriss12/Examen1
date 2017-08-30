(function() {
  'use strict';
  angular
    .module('PlayersApp')
    .service('PlayerService', PlayerService);
    
 PlayerService.$inject = ['$http'];
  function PlayerService($http) {
    var players = [
    // {
    //   code: '001',
    //   name:'Goku',
    //   nickName: 'Kokkun',
    //   money: '1500',
    //   photo:'https://res.cloudinary.com/pabskun/image/upload/v1489535279/goku_cqc9tb.png'
    // },
    // {
    //   code: '002',
    //   name:'Piccolo',
    //   nickName: 'PikOREO',
    //   money: '1500',
    // photo:'https://res.cloudinary.com/pabskun/image/upload/v1489535276/piccolo_ksxdec.png'
    // },
    // {
    //   code: '003',
    //   name:'Logan',
    //   nickName: 'Lovezno',
    //   money: '1500',
    //   photo:'https://res.cloudinary.com/pabskun/image/upload/v1489535284/lobezno_o1vs9g.png'
    // },
    // {

    //   code: '004',
    //   name:'Bomberman',
    //   nickName: 'Don Pepe y los Globos',
    //   money: '1500',
    //   photo:'https://res.cloudinary.com/pabskun/image/upload/v1489535282/donpepe_x9hksw.png'
    // }
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
     return $http.post('http://localhost:3000/api/playersPost',pPlayers);
    }

    function _getPlayers() {
      return $http.get('http://localhost:3000/api/playersGet');
    }

    function _updatePlayer(pObjPlayer, pPlayers) {
     
      var buyProperty = '';
      var playerList = pPlayers;
      for (var i = 0; i < playerList.length; i++) {
        if (playerList[i].code == pObjPlayer.player.code) {
          buyProperty = playerList[i].money - pObjPlayer.propertySelected.price;
          playerList[i].money = buyProperty;
          var buyer =  playerList[i];
        }
       return $http.put('http://localhost:3000/api/playersUpdate',buyer);
      }
    }

    function _noRepeat(pEditPlayer, pList) {
      var playerList = pList;
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
