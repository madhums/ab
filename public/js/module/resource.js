'use strict';

/**
 * Module resource
 */

angular.module('resource.module', [
  'ngResource',
])

/**
 * Constants
 */

.constant('basePath', '/api/1')

/**
 * Resource Factory
 */

.factory('Module', [
  '$resource', '$http', 'apiURL', 'basePath',
  function ($resource, $http, apiURL, basePath) {
    var url = apiURL + basePath + '/module/:moduleId';
    var params = {
      moduleId: '@_id'
    };
    var config = {
      update: { method: 'PUT' }
    };
    var Module = $resource(url, params, config);

    Module.prototype.action = function () {

    };

    return Module;
  }
]);
