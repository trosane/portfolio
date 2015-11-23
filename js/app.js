$(document).ready(function(){
    $(document).foundation();
     var animTime = 300,
      clickPolice = false;
  
  $(document).on('touchstart click', '.acc-btn', function(){
    if(!clickPolice){
       clickPolice = true;
      
      var currIndex = $(this).index('.acc-btn'),
          targetHeight = $('.acc-content-inner').eq(currIndex).outerHeight();
   
      $('.acc-btn h1').removeClass('selected');
      $(this).find('h1').addClass('selected');
      
      $('.acc-content').stop().animate({ height: 0 }, animTime);
      $('.acc-content').eq(currIndex).stop().animate({ height: targetHeight }, animTime);

      setTimeout(function(){ clickPolice = false; }, animTime);
    }
    
  });
});

// Create app
var app = angular.module('myApp', ['ui.router']);
	app.controller("myCtrl", function($scope) {

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

  .state('about', { // Landing page
	  url:'/about',
	  templateUrl: 'about.html', // HTML fragment
	  controller: 'AboutController', // Which controller 
  })

  .state('contact', { // Landing page
	  url:'/contact',
	  templateUrl: 'contact.html', // HTML fragment
	  controller: 'ContactController', // Which controller 
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
		console.log(data)
	});
})

.controller('AboutController', function($scope, $http){
	$http.get('data.json').success(function (data) {
		$scope.data = data;
	});
})

.controller('ContactController', function($scope, $http){
	$http.get('data.json').success(function (data) {
		$scope.data = data;
	});
})
