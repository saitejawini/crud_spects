var myApp = angular.module('myApp',['ngRoute']);
myApp.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl:'templates/home.html',
			controller:'spectsController'
		})
		.when('/spects', {
			templateUrl:'templates/list.html',
			controller:'spectsController'
		})
    .when('/spects/update', {
			templateUrl:'templates/update.html',
			controller:'spectsController'
		})
    .when('/spects/delete', {
			templateUrl:'templates/delete.html',
			controller:'spectsController'
		})
		.when('/spects/create', {
			templateUrl:'templates/add.html',
			controller:'spectsController'
		})
		.when('/spects/:id/update', {
			templateUrl:'templates/edit.html',
			controller:'spectsController'
		})
		.when('/spects/:id/read', {
			templateUrl:'templates/show.html',
			controller:'spectsController'
		});
});
