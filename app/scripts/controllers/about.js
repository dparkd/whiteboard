'use strict';

/**
 * @ngdoc function
 * @name codeApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the codeApp
 */
angular.module('whiteboardApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.abouts = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
