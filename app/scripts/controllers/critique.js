'use strict';

/**
 * @ngdoc function
 * @name codeApp.controller:critiqueCtrl
 * @description
 * # critiqueCtrl
 * Controller of the codeApp
 */



function CritiqueCtrl($scope, Data, ngDialog, $http, questionData, positionData, drawData) {
    //MODALS
    $scope.closeModal = function() {
      $scope.stickyShow = {'opacity':'0', 'pointer-events':'none'};
      $scope.questionShow = {'opacity':'0', 'pointer-events':'none'};
      $scope.drawShow = {'opacity':'0', 'pointer-events':'none'};
      $scope.projectShow = {'opacity':'0', 'pointer-events':'none'}
    };

    
    //MODAL EVENT CLICKS
    $scope.openSticky = function() {
      $scope.stickyShow = {'opacity':'1', 'pointer-events':'auto'};
    };
    $scope.openDrawing = function() {
      $scope.drawShow = {'opacity':'1', 'pointer-events':'auto'};
    };
    $scope.openQuestion = function() {
      $scope.questionShow = {'opacity':'1', 'pointer-events':'auto'};
    };
    $scope.openProject = function() {
      $scope.projectShow = {'opacity':'1', 'pointer-events':'auto'};
    };
     

    //STICKIES
    $scope.stickies = Data.listSticky();

    $scope.addSticky = function () {
      Data.saveSticky($scope.sticky);
      $scope.stickyShow = {'opacity':'0', 'pointer-events':'none'};
      // $scope.successMessage = {'animation':'successAnimation 2s', '-webkit-animation': 'successAnimation 2s'};
      // $scope.what = 'Sticky';
    };


    //QUESTIONS
    $scope.questions = questionData.listQuestion();

    $scope.addQuestion = function () {
      questionData.saveQuestion($scope.question);
      $scope.questionShow = {'opacity':'0', 'pointer-events':'none'};
    };

     //DRAWINGS
    $scope.drawingArray = drawingArray;
    $scope.drawingCounter = 0;
    $scope.drawings = drawData.listDrawing();

    $scope.saveDraw = function () {
      drawData.saveDrawing($scope.drawingArray[$scope.drawingCounter]);
      $scope.drawShow = {'opacity':'0', 'pointer-events':'none'};
      $scope.drawingCounter ++;
    };
};



















