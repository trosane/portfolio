$(document).foundation();

// Create app
var app = angular.module('myApp', ['ui.router']);
	.controller("myCtrl", function($scope) {

	})

// Configure app
app.config(function($stateProvider, $urlRouterProvider) {
  
  $urlRouterProvider.otherwise('/home');

  $stateProvider.state('home', { // Landing page
	  url:'/home',
	  templateUrl: 'home.html', // HTML fragment
	  controller: 'HomeController', // Which controller 
  })

  .state('projects', { // Landing page
	  url:'/projects',
	  templateUrl: 'projects.html', // HTML fragment
	  controller: 'ProjectsController', // Which controller 
  })
})

// Landing page controller: define $scope.number as a number
.controller('HomeController', function($scope, $http){
	$http.get('data.json').success(function (data) {
		$scope.data = data;
	});
})

// Content controller: define $scope.url as an image
.controller('ProjectsController', function($scope, $http){
  $http.get('data.json').success(function (data) {
		$scope.data = data;
	});
})
