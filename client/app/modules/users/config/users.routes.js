/**
 * Created by movibe on 29/12/14.
 */
'use strict';
angular.module ('com.module.users')
  .config (function ($stateProvider) {
    $stateProvider.state ('app.users', {
      abstract: true,
      url: '/users',
      templateUrl: 'modules/users/views/main.html',
      controller: 'UsersCtrl'
    }).state ('app.users.profile', {
      url: '/profile',
      templateUrl: 'modules/users/views/profile.html',
      controller: 'UsersCtrl'
    });
  })
