'use strict';

angular.module('tweets').config(['$stateProvider',
  function ($stateProvider) {

    $stateProvider
      .state('me', {
        url: '/me',
        templateUrl: 'modules/tweets/views/me/me.client.view.html'
      })
      .state('feed', {
        url: '/',
        templateUrl: 'modules/tweets/views/feed/feed.client.view.html'
      });
  }
]);
