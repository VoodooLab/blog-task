'use strict';

angular.module('blogTask', [
  'ngRoute',
  'blogTask.filters',
  'blogTask.services',
  'blogTask.directives',
  'blogTask.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/create', {templateUrl: 'partials/createPost.html', controller: 'NewPostController'});
  $routeProvider.otherwise({redirectTo: '/main'});
}]);
