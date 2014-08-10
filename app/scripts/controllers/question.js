'use strict';

/**
 * @ngdoc function
 * @name codeApp.controller:QuestionCtrl
 * @description
 * # QuestionCtrl
 * Controller of the codeApp
 */
angular.module('whiteboardApp')
  .controller('QuestionCtrl', function ($scope) {
    $scope.questions = [];

    $scope.addQuestion = function () {
      $scope.questions.push($scope.question);
      $scope.question = '';
    };

    $scope.removeQuestion = function(index) {
      $scope.questions.splice(index, 1);
    };
  });
