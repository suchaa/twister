'use strict';

angular.module('tweets').config([
  '$stateProvider',
  function($stateProvider){
    $stateProvider
    .state('me', {
      url: '/me',
      templateUrl: '/modules/twister/views/me.client.view.html'
    })
  }
]);
