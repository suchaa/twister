'use strict';

angular.module('core').controller('FeedController', [
  '$scope',
  function($scope) {
    $scope.profile = {
      name: 'Suchada Chaiyakot',
      screenName: 'suchaa',
      tweetCount: 2,
      followerCount: 34,
      followingCount: 140
    };
    $scope.timeline = [
      {
        name: 'Suchada Chaiyakot',
        screenName: 'suchaa',
        tweetText: 'Hello'
      },
      {
        name: 'test name',
        screenName: 'name',
        tweetText: 'Sawatdee'
      },
      {
        name: 'test sample',
        screenName: 'sample',
        tweetText: '5555555555555555555'
      }
    ]
  }
]);
