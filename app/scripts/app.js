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
        controller: 'whiteboardCtrl'
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
      .when('/userProject', {
        templateUrl: 'views/userProject.html',
        controller: 'whiteboardCtrl'
      })
      .otherwise({
        redirectTo: '/'
      })
  });




/* ===== FACTORIES =====*/

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

angular.module('whiteboardApp').factory('drawData', function() {

  //DRAWINGS
  var drawings = [];

   return {
        listDrawing: function() {
            return drawings;   // items exist already so just return the array
        },
        saveDrawing: function(item) {
            drawings.push(item);
            return drawings;
        }
    }
});

angular.module('whiteboardApp').factory('imageData', function() {
  //DRAWINGS
  var images = [];

   return {
        listImg: function() {
            return images;   // items exist already so just return the array
        },
        saveImg: function(item) {
            images.push(item);
            return images;
        }
    }
});

angular.module('whiteboardApp').factory('titleData', function() {

  //STICKIES
  var titles = [];

   return {
        listTitle: function() {
            return titles;   // items exist already so just return the array
        },
        saveTitle: function(item) {
            titles.push(item);
            return titles;
        }
    }
});

angular.module('whiteboardApp').factory('projectData', function() {

  //STICKIES
  var project = [];

   return {
        listProject: function() {
            return project;   // items exist already so just return the array
        },
        saveProject: function(item) {
          if(project.length > 5){
            project.splice(0,4);
            project.push(item);
            return project;
          }else{
            project.push(item);
            return project;
          } 
        }
    }
});

angular.module('whiteboardApp').factory('userData', function() {

  //STICKIES
  var user = [];

   return {
        listUser: function() {
            return user;   // items exist already so just return the array
        },
        saveUser: function(item) {
            user.push(item);
            return user;
        }
    }
});

angular.module('whiteboardApp').factory('positionData', function() {
  var stickyPos;
  var questionPos;
  var drawPos;

  return {
    listSticky: function() {
      return stickyPos;
    },
    listQuestion: function() {
      return questionPos;
    },
    listDrawing: function() {
      return drawPos;
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
       position: 'absolute'
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

  angular.module('getPosition', [])
  .directive('draggable', function() {
    return{
      link: function(scope, element, attrs) {
        element.draggable({
          
        })
      }
    }
  })


































