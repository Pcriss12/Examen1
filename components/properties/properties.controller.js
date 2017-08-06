(function() {
  'use strict'
  angular
    .module('PlayersApp')
    .controller('PropertyController', PropertyController);

  PropertyController.$inject = ['PropertyService', 'PlayerService'];

  function PropertyController(PropertyService, PlayerService) {
    var propertyCtrl = this;
    propertyCtrl.propertySelected = {};

    function init() {
      propertyCtrl.properties = PropertyService.getProperty();
      propertyCtrl.property = {};
      propertyCtrl.propertySelected = {};
      propertyCtrl.players = PlayerService.getPlayers();
    }init();

    propertyCtrl.Buy = function(property){
      $("#modalProperty").modal();
      sendProperty(property);
    };
  function sendProperty(property) {
      propertyCtrl.propertySelected = {};
      propertyCtrl.propertySelected = property;
    }
    function sendProperty(property) {
      var propertySelected = '';
      propertySelected = property;

      propertyCtrl.propertySelected = propertySelected;
    }
    propertyCtrl.perform = function(userPlayer){
      var playerList =  PlayerService.getPlayers();
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
      PropertyService.updateProperty(buy);
      init();
      ctrl.userList = '';
    };
  };
})();
