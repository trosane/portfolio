$(document).foundation();

// Create app
angular.module('myApp', ['ui.router'])
	.controller("myCtrl", function($scope, $http) {
		$http.get('data.json').success(function (data) {
			$scope.data = data;
		})
	})

// Configure app
.config(function($stateProvider) {
  $stateProvider.state('home', { // Landing page
  url:'/index.html',
  templateUrl: 'index.html', // HTML fragment
  controller: 'HomeController', // Which controller 
  })

  .state('about', { // Landing page
  url:'/about',
  templateUrl: 'about.html', // HTML fragment
  controller: 'AboutController', // Which controller 
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
		console.log($scope.data);
	});

	console.log($scope.data);
})


// About page controller: define $scope.about as a string
.controller('AboutController', function($scope){
  $scope.stuff = "Some info"
  $scope.about = "Hello"
})


// Content controller: define $scope.url as an image
.controller('ProjectsController', function($scope){
  $scope.stuff = "Projects"
  $scope.stuff = "blah"
})
