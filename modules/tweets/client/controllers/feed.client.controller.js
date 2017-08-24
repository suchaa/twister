'use strict';

angular.module('tweets').controller('FeedController', [
  '$scope',
  '$modal',
  function($scope, $modal) {
    $scope.profile = {
      name: 'Suchada Chaiyakot',
      screenName: 'suchaa',
      tweetCount: 1,
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
      $scope.profile.tweetCount += 1;
    };

    $scope.replyTo = function(screenName){
      var modalInstance = $modal.open({
        animation: true,
        templateUrl: './views/replymodal.client.view.html',
        controller: 'ReplyModalController',
        resolve: {  //tweetText ถูกฉีดเข้าไปใน controller จะได้ค่าที่ return จาก function
          tweetText: function(){
            return '@' + screenName + ' ';
          }
        }
      });
      modalInstance.result.then(function(tweetText){
        $scope.postTweet(tweetText, $scope.profile.name, $scope.profile.screenName);
      });
    };
    
  }
]);
