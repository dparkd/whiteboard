'use strict';

/**
 * @ngdoc overview
 * @name codeApp
 * @description
 * # codeApp
 *
 * Main module of the application.
 */
angular
  .module('whiteboardApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'dragModule',
    'ngDialog'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/sticky', {
        templateUrl: 'views/sticky.html',
        controller: 'StickyCtrl'
      })
      .when('/question', {
        templateUrl: 'views/question.html',
        controller: 'QuestionCtrl'
      })
      .when('/draw', {
        templateUrl: 'views/draw.html',
        controller: 'DrawCtrl'
      })
      .when('/critique', {
        templateUrl: 'views/critique.html',
        controller: 'CritiqueCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

  /* ===== DIRECTIVES =====*/


  //DRAG MODULE
  angular.module('dragModule', [])
  .directive('myDraggable', ['$document', function($document) {
    return function(scope, element, attr) {
      var startX = 0, startY = 0, x = 0, y = 0;

      element.css({
       position: 'relative',
       cursor: 'pointer'
      });

      element.on('mousedown', function(event) {
        // Prevent default dragging of selected content
        event.preventDefault();
        startX = event.pageX - x;
        startY = event.pageY - y;
        $document.on('mousemove', mousemove);
        $document.on('mouseup', mouseup);
      });

      function mousemove(event) {
        y = event.pageY - startY;
        x = event.pageX - startX;
        element.css({
          top: y + 'px',
          left:  x + 'px'
        });
      }

      function mouseup() {
        $document.off('mousemove', mousemove);
        $document.off('mouseup', mouseup);
      }
    };
  }]);








