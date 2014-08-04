'use strict';

/**
 * @ngdoc function
 * @name codeApp.controller:StickyCtrl
 * @description
 * # StickyCtrl
 * Controller of the codeApp
 */
angular.module('whiteboardApp')
  .controller('StickyCtrl', function ($scope) {
    $scope.stickies = [];

    $scope.addSticky = function () {
      $scope.stickies.push($scope.sticky);
      $scope.sticky = '';
    };

    $scope.removeSticky = function(index) {
      $scope.stickies.splice(index, 1);
    };
  });
