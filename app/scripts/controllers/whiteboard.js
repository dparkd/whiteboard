'use strict';

/**
 * @ngdoc function
 * @name codeApp.controller:whiteboardCtrl
 * @description
 * # whiteboardCtrl
 * Controller of the codeApp
 */

angular.module('whiteboardApp')
.controller('whiteboardCtrl', function ($scope, imageData, userData, titleData, projectData, ngDialog) {
  
    $scope.closeModal = function() {
      $scope.imageShow = {'opacity':'0', 'pointer-events':'none'};
      $scope.textShow = {'opacity':'0', 'pointer-events':'none'};
      $scope.projectShow = {'opacity':'0', 'pointer-events':'none'};
      $scope.profileShow = {'opacity':'0', 'pointer-events':'none'};
    };

    //MODAL EVENT CLICKS
    $scope.openImage = function() {
      $scope.imageShow = {'opacity':'1', 'pointer-events':'auto'};
    };
    $scope.openText = function() {
      $scope.textShow = {'opacity':'1', 'pointer-events':'auto'};
    }
    $scope.openProject = function() {
      $scope.projectShow = {'opacity':'1', 'pointer-events':'auto'};
    }

    //TITLE
    $scope.project = projectData.listProject();

    $scope.addProject = function () {
      projectData.saveProject($scope.pTitle);
      projectData.saveProject($scope.description);
      projectData.saveProject($scope.scope);
      projectData.saveProject($scope.comments);
      $scope.projectShow = {'opacity':'0', 'pointer-events':'none'};
    };

    //TITLE
    $scope.titles = titleData.listTitle();

    $scope.addTitle = function () {
      titleData.saveTitle($scope.title);
      $scope.textShow = {'opacity':'0', 'pointer-events':'none'};
    };

    //IMAGE
    $scope.imageArray = imageArray;
    $scope.imageCounter = 0;
    $scope.imgs = imageData.listImg();

    $scope.addImage = function () {
      imageData.saveImg($scope.imageArray[$scope.imageCounter]);
      $scope.imageShow = {'opacity':'0', 'pointer-events':'none'};
      $scope.imageCounter ++;

      console.log(imageArray);
    };



    /* ======== FOR THE GALLERY PAGE ==========*/
    //MODAL EVENT CLICKS
    $scope.openProfile = function() {
      $scope.profileShow = {'opacity':'1', 'pointer-events':'auto'};
    };

    $scope.user = userData.listUser();
    $scope.addUser = function() {
      userData.saveUser($scope.name);
      userData.saveUser($scope.school);
      userData.saveUser($scope.area);

      $scope.profileShow = {'opacity':'0', 'pointer-events':'none'};
    };

});


