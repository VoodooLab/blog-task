'use strict';

angular.module('blogTask.services', [])

  .factory('postFactory', function($http){
  	var Data = {};
  	Data.getPosts = function () {
  		return $http.get('http://localhost:8000/app/posts.json');		
  	}
  	return Data;
  })  

