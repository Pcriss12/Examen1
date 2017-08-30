(function() {
  'use strict'
  angular
    .module('PlayersApp')
    .controller('PropertyController', PropertyController);

  PropertyController.$inject = ['PropertyService', 'PlayerService'];

  function PropertyController(PropertyService, PlayerService) {
    var propertyCtrl = this;
    loadPlayer();
    loadProperties();
    propertyCtrl.propertySelected = {};

    function loadPlayer() {
      PlayerService.getPlayers().then(function(response) {
        propertyCtrl.players = response.data;
      })
    }
    function loadProperties() {
      PropertyService.getProperty().then(function(response) {
        propertyCtrl.properties = response.data;
      })
    }
    function init() {
      propertyCtrl.property = {};
      propertyCtrl.propertySelected = {};
    }init();

    propertyCtrl.Buy = function(property){
      $("#modalProperty").modal();
      sendProperty(property);
    };
  function sendProperty(property) {
      var propertySelected = {};
      propertyCtrl.propertySelected = property;
    }
    function sendProperty(property) {
      var propertySelected = '';
      propertySelected = property;

      propertyCtrl.propertySelected = propertySelected;
    }
    propertyCtrl.perform = function(userPlayer){
      var playerList = propertyCtrl.players;
      var player = '';

      for (var i = 0; i < playerList.length; i++) {
        if (userPlayer === playerList[i].name) {
          player = playerList[i];
        }
      }
      update(player, propertyCtrl.propertySelected);
    };

    function update(player, propertySelected) {
      var buy = {
        player,
        propertySelected
      }
      PlayerService.updatePlayer(buy, propertyCtrl.players);
      PropertyService.updateProperty(buy, propertyCtrl.properties);
      init();
      propertyCtrl.userList = '';
    };
  };
})();
