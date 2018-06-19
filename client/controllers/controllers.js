myApp.controller('spectsController', function($scope,$route,$routeParams,$http){
	$scope.getSpects = function(){
		$http.get('/api/spects/').then(function(response){
			$scope.spects = response.data;
		});
	};
	$scope.showSpects = function(){
		var id = $routeParams.id;
		$http.get('/api/spects/'+ id).then(function(response){
			$scope.spect = response.data;
		});
	};
	$scope.addSpects = function(){
		$http.post('/api/spects/', $scope.spect).then(function(response){
			window.location.href = '/';
		});
	};
	$scope.updateSpects = function(){
		var id = $routeParams.id;
		$http.put('/api/spects/'+ id , $scope.spect).then(function(response){

			//$scope.spect = response.data;
			window.location.href = '#/spects';
		});
	};
	$scope.deleteSpects = function(id){
		var id = id;
		$http.delete('/api/spects/'+ id).then(function(response){
			$route.reload();
		});
	};
	
});
