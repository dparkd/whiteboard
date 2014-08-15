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
        templateUrl: 'views/gallery.html',
        controller: 'GalleryCtrl'
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
      .when('/whiteboard', {
        templateUrl: 'views/whiteboard.html',
        controller: 'whiteboardCtrl'
      })
      .when('/project', {
        templateUrl: 'views/project.html',
        controller: 'projectCtrl'
      })
      .otherwise({
        redirectTo: '/'
      })
  });




/* ===== STICKY FACTORY =====*/

angular.module('whiteboardApp').factory('Data', function() {

  //STICKIES
  var stickies = [];

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

angular.module('whiteboardApp').factory('questionData', function() {

  //QUESTIONS
  var questions = [];

   return {
        listQuestion: function() {
            return questions;   // items exist already so just return the array
        },
        saveQuestion: function(item) {
            questions.push(item);
            return questions;
        }
    }
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








