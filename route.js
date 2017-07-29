(function(){
  'use strict'
  angular
    .module('PlayersApp', ['ui.router', 'oc.lazyLoad', 'angularCSS', 'ngMessages', 'ngFileUpload'])
    .config(configuration);

  configuration.$inject = ['$stateProvider', '$urlRouterProvider'];

  function configuration($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('landing', {
        url: '/landing',
        templateUrl: './components/landing/landing.view.html',
      })
      .state('regPlayer', {
        url: '/regPlayer',
        templateUrl: './components/registerPlayer/regPlayer.view.html',
        controller: 'PlayerController',
        controllerAs: 'ctrl'
      })

    $urlRouterProvider.otherwise('/landing');
  }
})();
