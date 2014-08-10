'use strict';

/**
 * @ngdoc function
 * @name codeApp.controller:DrawCtrl
 * @description
 * # DrawCtrl
 * Controller of the codeApp
 */
angular.module('whiteboardApp')
  .controller('DrawCtrl', function ($scope) {
    $scope.drawings = [];

    $scope.addDraw = function () {
      $scope.drawings.push($scope.draw);
      $scope.drawings = '';
    };

    $scope.removeQuestion = function(index) {
      $scope.questions.splice(index, 1);
    };
  });

