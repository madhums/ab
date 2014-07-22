'use strict';

/**
 * Module
 */

angular.module('module', [
  'ngRoute',
  'resource.module'
])

/**
 * Constants
 */

.constant('moduleTemplate', '/js/module/templates/module.html')

/**
 * Config
 */

.config([
  '$routeProvider', 'moduleTemplate',
  function ($routeProvider, moduleTemplate) {
    $routeProvider.when('/module', {
      templateUrl: moduleTemplate,
      controller: 'ModuleCtrl',
      resolve: {
        module: ['Module', function (Module) {
          return Module.query({});
        }]
      }
    });
  }
])

/**
 * Controller
 */

.controller('ModuleCtrl', [
  '$scope', '$rootScope',
  function ($scope, $rootScope) {
    $rootScope.pageTitle = 'Module';
  }
]);
