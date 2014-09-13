'use strict';

/**
 * @ngdoc function
 * @name codeApp.controller:projectCtrl
 * @description
 * # projectCtrl
 * Controller of the codeApp
 */

angular.module('whiteboardApp')
  .controller('projectCtrl', function ($scope, userData) {

    $scope.people = ['Andy Kim'];
    $scope.selectedIndex = 0;

    $scope.critiquenotes = ['Try the color blue', 'Try using some flat design', 'Lighten up the color on the red'];
    $scope.questions = ['Why use geometric?', 'Why didnt you make the logo white? '];

    $scope.personClicked = function($index){
      $scope.selectedIndex = $index;
    };

    $scope.user = userData.listUser();

  });

