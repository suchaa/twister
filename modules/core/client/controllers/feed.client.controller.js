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
        tweetText: 'Hello',
        tweetTime: '2017-05-29T15:37:26+07:00'
      },
      {
        name: 'test name',
        screenName: 'name',
        tweetText: 'Sawatdee',
        tweetTime: '2017-06-29T15:37:26+07:00'
      },
      {
        name: 'test sample',
        screenName: 'sample',
        tweetText: '5555555555555555555',
        tweetTime: '2017-07-29T15:37:26+07:00'
      }
    ];

    $scope.postTweet = function(tweetText, name, screenName){
      $scope.timeline.push({
        //ชื่อ key: value
        name: name,
        screenName: screenName,
        tweetText: tweetText,
        tweetTime: new Date().toISOString()
      });
      $scope.tweetText = '';
    };
  }
]);
