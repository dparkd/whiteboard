'use strict';

/**
 * @ngdoc function
 * @name codeApp.controller:critiqueCtrl
 * @description
 * # critiqueCtrl
 * Controller of the codeApp
 */
angular.module('whiteboardApp').service('Data', function() {
  var stickies = ['sample'];

   return {
        listSticky: function() {
            return stickies;   // items exist already so just return the array
        },
        saveSticky: function(item) {
            stickies.push(item);
            return stickies;
        }
    }
});



function CritiqueCtrl($scope, Data, ngDialog) {
    //MODALS
    $scope.closeModal = function() {
      $scope.modalShow = {'opacity':'0', 'pointer-events':'none'};
    }

    $scope.openPlain = function() {
      $scope.modalShow = {'opacity':'1', 'pointer-events':'auto'};
    };


    //STICKIES
    $scope.stickies = Data.listSticky();

    $scope.addSticky = function () {
      Data.saveSticky($scope.sticky);
      $scope.modalShow = {'opacity':'0', 'pointer-events':'none'};
    };


};









