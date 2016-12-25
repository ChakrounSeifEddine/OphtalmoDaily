'use strict';

app.controller('CityController',function($scope,$http){
	$scope.city={};
	$scope.cityFilter=[];
	$scope.singleCity={};
/**
Add city object
*/
	$scope.saveCity=function(){
		$http.post('http://localhost:8080/OphtalmoDailyServer/city',$scope.city).then(function(data){
			$scope.myVar=false;
			alert(data);
		}).catch(function(err){
			console.log(err);
		});

	};
/**
Find city object
**/
	$scope.searchCity=function(){
		$http.get('http://localhost:8080/OphtalmoDailyServer/city').then(function(data){
			$scope.cityFilter=[];
			var cities=data.data;
			angular.forEach(cities,function(element){
				var cityName= element._cityName;
				if (angular.isDefined(cityName)&&cityName.toLowerCase().indexOf($scope.city._cityFilter.toLowerCase())!=-1) {
					//return data to form
					$scope.cityFilter.push(element);
					$scope.myVar=true;
					$scope.myHiddenComposit=true;
				}
			});

		}).catch(function(err){
			console.log(err);
		});

	};
	/**
	Delete city object
	*/

	$scope.deleteCity=function(singleCity){
		var id=singleCity._id;
		
			
			$http.delete('http://localhost:8080/OphtalmoDailyServer/city/'+id).then(function(data){
				$scope.myHiddenComposit=false;
				$scope.cityFilter.splice($scope.cityFilter.indexOf(singleCity),1);
				if ($scope.cityFilter.length==0) {
					$scope.myVar=false;
				}
			alert(data);
		}).catch(function(err){
			console.log(err);
		});
	};

	/**
	Update Object City
	*/
	$scope.updateCity=function(singleCity){
		$http.put('http://localhost:8080/OphtalmoDailyServer/city/'+singleCity._id,singleCity).then(function(data){

		}).catch(function(err){
			console.log(err);
		});

	};

	/**
	Hidden Composant
	*/
	$scope.Hidden= function(){
		$scope.myHiddenComposit=false;
	}



});