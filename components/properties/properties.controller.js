(function() {
  'use strict'
  angular
    .module('PlayersApp')
    .controller('PropertyController', PropertyController);

  PropertyController.$inject = ['PropertyService', 'PlayerService'];

  function PropertyController(PropertyService, PlayerService) {
    var propertyCtrl = this;

    function init() {
      propertyCtrl.properties = PropertyService.getProperty();
      propertyCtrl.property = {};
      propertyCtrl.players = PlayerService.getPlayers();
    }init();

    propertyCtrl.Buy = function(userProperty){
      $("#modalProperty").modal();

      console.log(userProperty);
    };

  };
})();
