'use strict';

angular.module('tweets').controller('UserTimelineController', [
  '$scope',
  '$http',
  '$stateParams',
  function ($scope, $http, $stateParams) {
    $http.get('friendships/show/' + $stateParams.username)
      .success(function (response) {
        $scope.profile = {
          name: '',
          screenName: $stateParams.username,
          tweetCount: 2,
          followerCount: 34,
          followingCount: 140,
          isFollowing: response.is_following,
          isFollowed: response.is_followed
        };
      })
      .error(function (response) {
        $scope.error = response.message;
      });

    $http.get('/statuses/user_timeline/' + $stateParams.username)
      .success(function (response) {
        $scope.tweets = response;
      })
      .error(function (response) {
        $scope.error = response.message;
      });
  }
]);