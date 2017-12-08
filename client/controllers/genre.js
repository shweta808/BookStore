
var app = angular.module('myApp',[]);
app.controller('GenreController',['$scope','$http',function($scope,$http){
	console.log('Genre Controller loaded');
	$scope.getGenres = function(){
		$http({
		method: "GET",
		url: "http://localhost:3000/api/genres"
	}).then(function success(response){
		console.log(response);
		$scope.genres = response.data;
        // $scope.statustext = response.statusText; 
	},function error(response){
		console.log(response);
	});
	};
}]);