

var app = angular.module('myApp',['ngRoute']);
app.config(function($routeProvider){
	$routeProvider.when('/',{
		controller : 'GenreController',
		templateUrl : 'index.html' 
	})
	.otherwise({
		redirectTo:'/'
	}); 
});