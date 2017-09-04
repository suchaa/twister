'use strict';

angular.module('tweets')
.config(['$stateProvider',/* ทำงานตอนเริ่มต้น */
  function ($stateProvider) {

    $stateProvider
      .state('me', {
        url: '/me',
        templateUrl: 'modules/tweets/views/me/me.client.view.html'
      })
      .state('feed', {
        url: '/',
        templateUrl: 'modules/tweets/views/feed/feed.client.view.html'
      })
      .state('usertimeline', {
        url: '/u/:username',
        templateUrl: 'modules/tweets/views/usertimeline/usertimeline.client.view.html'
      });
  }
])

/* ตอนที่เริ่มทำงาน */
.run([
  '$rootScope',
  '$state',
  'Authentication',
  function($rootScope, $state, Authentication){/* $on ใช้ detect เวลามี event เกิดขึ้น */
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromParams){
      if( ((toState.name !== 'signup') && (toState.name !== 'signin')) && !Authentication.user){
        event.preventDefault(); /*  เผื่อมีการโหลดหน้าไว้แล้ว ตัวนี้จะบอกว่าไม่ต้องเดี๋ยวฉันจัดการเอง จัดการไปที่ signup */
        $state.go('signup');
      }
    });
  }
]);


