'use strict';

var app = angular.module('blogTask.controllers', []);

app.controller('BlogController', ['$scope', 'postFactory', '$location', function($scope, postFactory, $location) {

  	$scope.post = {};

  	postFactory.getPosts().success(function (data) {
  		$scope.posts = data;
  	});

	$scope.addPost = function() {
		$scope.post.createdOn = Date.now();
		$scope.posts.push($scope.post);
		$scope.post = {};
		$location.path('/main');
	};

	$scope.deletePost = function(index) {
		$scope.posts.splice(index, 1);
	};

}]);

app.controller('TabsController', ['$scope', function($scope){
  	$scope.tab = 3;

  	$scope.setTab = function(newTab) {
  		$scope.tab = newTab;	
  	};

  	$scope.isSet = function(current) {
  		return $scope.tab === current;
  	};
}]);

app.controller('NewPostController', ['$scope', function($scope){

}]);


