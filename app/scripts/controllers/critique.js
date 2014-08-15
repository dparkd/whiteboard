'use strict';

/**
 * @ngdoc function
 * @name codeApp.controller:critiqueCtrl
 * @description
 * # critiqueCtrl
 * Controller of the codeApp
 */

function CritiqueCtrl($scope, Data, ngDialog, $http, questionData) {
    //MODALS
    $scope.closeModal = function() {
      $scope.stickyShow = {'opacity':'0', 'pointer-events':'none'};
      $scope.questionShow = {'opacity':'0', 'pointer-events':'none'};
      $scope.drawShow = {'opacity':'0', 'pointer-events':'none'};
    };

    

    $scope.openSticky = function() {
      $scope.stickyShow = {'opacity':'1', 'pointer-events':'auto'};
    };
    $scope.openDrawing = function() {
      $scope.drawShow = {'opacity':'1', 'pointer-events':'auto'};
    };
    $scope.openQuestion = function() {
      $scope.questionShow = {'opacity':'1', 'pointer-events':'auto'};
    };



    //STICKIES
    $scope.stickies = Data.listSticky();

    $scope.addSticky = function () {
      Data.saveSticky($scope.sticky);
      $scope.stickyShow = {'opacity':'0', 'pointer-events':'none'};
    };

    //DRAWINGS
    $scope.addDraw = function () {
      drawData.saveDraw($scope.draw);
      $scope.drawShow = {'opacity':'0', 'pointer-events':'none'};
    };

    //QUESTIONS
    $scope.questions = questionData.listQuestion();

    $scope.addQuestion = function () {
      questionData.saveQuestion($scope.question);
      $scope.questionShow = {'opacity':'0', 'pointer-events':'none'};
    };

    
};








