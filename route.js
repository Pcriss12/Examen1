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
        templateUrl: './components/landing/landing.view.html'
      })
      .state('landing.regPlayer', {
        url: '/regPlayer',
        templateUrl: './components/registerPlayer/regPlayer.view.html',
        resolve: {
          load: ['$ocLazyLoad', function($ocLazyLoad){
            return $ocLazyLoad.load('./components/registerPlayer/regPlayer.controller.js')
          }]
        },
        controller: 'PlayerController',
        controllerAs: 'ctrl'
      })
      .state('landing.properties', {
        url: '/properties',
        templateUrl: './components/properties/properties.view.html',
        resolve: {
          load: ['$ocLazyLoad', function($ocLazyLoad){
            return $ocLazyLoad.load('./components/properties/properties.controller.js')
          }]
        },
        controller: 'PropertyController',
        controllerAs: 'ctrl'
      })
      .state('landing.lists', {
        url: '/lists',
        templateUrl: './components/lists/lists.view.html',
        resolve: {
          load: ['$ocLazyLoad', function($ocLazyLoad){
            return $ocLazyLoad.load('./components/registerPlayer/regPlayer.controller.js')
          }]
        },
        controller: 'PlayerController',
        controllerAs: 'ctrl'
      })

    $urlRouterProvider.otherwise('/landing');
  }
})();
