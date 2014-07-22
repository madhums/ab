'use strict';

/**
 * App
 */

angular.module('app', [
  'module',
  'ngRoute',
  'ui.bootstrap'
])

/**
 * Application wide constants
 */

.constant('apiURL', window.apiURL)
.constant('headerTemplate', '/js/app/templates/header.html')

/**
 * Config
 */

.config([
  '$routeProvider', '$locationProvider',
  function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(false);
    $routeProvider
      .when('/', {
        templateUrl: '/js/app/templates/app.html',
        controller: 'AppCtrl'
      })
      .otherwise({ redirectTo: '/' });
  }
])

/**
 * Application controller
 */

.controller('AppCtrl', [
  '$scope', 'headerTemplate', '$rootScope',
  function ($scope, headerTemplate, $rootScope) {
    $scope.headerTemplate = headerTemplate;
    $rootScope.pageTitle = 'Welcome!';
  }
]);

/**
 * Bootstrap
 */

angular.element(document).ready(function() {
  angular.bootstrap(document, ['app']);
});
