'use strict';

angular.module('core').controller('MeController', [
  '$scope',
  function($scope) {
    $scope.profile = {
      name: 'Suchada Chaiyakot',
      screenName: 'suchaa',
      tweetCount: 2,
      followerCount: 34,
      followingCount: 140
    };
    $scope.tweets = [
      {
        name: 'Suchada Chaiyakot',
        screenName: 'suchaa',
        tweetText: 'Hello'
      },
      {
        name: 'Suchada Chaiyakot',
        screenName: 'suchaa',
        tweetText: 'Sawatdee'
      },
      {
        name: 'Suchada Chaiyakot',
        screenName: 'suchaa',
        tweetText: '5555555555555555555'
      }
    ];
  }
]);
