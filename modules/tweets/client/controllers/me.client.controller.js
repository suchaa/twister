'use strict';

angular.module('tweets').controller('MeController', [
  '$scope',
  'Authentication',
  '$http',
  function($scope, Authentication, $http) {
    $scope.profile = {
      name: Authentication.user.displayName,
      screenName: Authentication.user.username,
      tweetCount: 2,
      followerCount: 34,
      followingCount: 140
    };

    $http.get('/statuses/me_timeline')
    .success(function(response){
      $scope.tweets = response;
    })
    .error(function(response){
      $scope.error = response.message;
    });

/*     $scope.tweets = [
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
    ]; */
    
  }
]);
