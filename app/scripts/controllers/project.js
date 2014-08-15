'use strict';

/**
 * @ngdoc function
 * @name codeApp.controller:projectCtrl
 * @description
 * # projectCtrl
 * Controller of the codeApp
 */

angular.module('whiteboardApp')
  .controller('projectCtrl', function ($scope) {

    $scope.people = ['Andy Kim', 'Jonathan Doe', 'Anonymous', 'Jodie Smith'];
    $scope.selectedIndex = 0;

    $scope.personClicked = function($index){
      $scope.selectedIndex = $index;
          console.log($index);
    };




  });

