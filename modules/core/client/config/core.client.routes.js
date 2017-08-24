'use strict';

// Setting up route
angular.module('core').config([
  '$stateProvider', 
  '$urlRouterProvider',
  function ($stateProvider, $urlRouterProvider) {

    // Redirect to 404 when route not found
    $urlRouterProvider.otherwise('/');

    // Home state routing
 /*    $stateProvider
      .state('feed', {
        url: '/',
        templateUrl: 'modules/core/views/feed.client.view.html'
      })
      .state('not-found', {
        url: '/not-found',
        templateUrl: 'modules/core/views/404.client.view.html'
      }) 
     .state('me', {
        url: '/me',
        templateUrl: '/modules/core/views/me.client.view.html'
      })
      .state('signup', {
        url: '/signup',
        templateUrl: '/modules/core/views/signup.client.view.html'
      })
      .state('signin', {
        url: '/signin',
        templateUrl: '/modules/core/view/signin.client.view.html'
      })  ; */
  }
]);
