'use strict';

app.controller('personnelController',function($scope,$http){
	$scope.personnel={};
	$scope.personnelFilter=[];
	$scope.singlePersonnel={};
	$scope.personnelFlash=[];
	$scope.sortReverse=false;
	$http.get('http://localhost:8080/OphtalmoDailyServer/staff').then(function(data){
		$scope.personnelFlash=data.data;
	}).catch(function(err){
		console.log(err);
	});

/**
Add personnel object
*/
	$scope.savePerson=function(){
		
		$http.post('http://localhost:8080/OphtalmoDailyServer/staff',$scope.personnel).then(function(data){
			$scope.myVar=false;
			$http.get('http://localhost:8080/OphtalmoDailyServer/staff').then(function(data){
			$scope.personnelFlash=data.data;
			}).catch(function(err){
			console.log(err);
			});
		}).catch(function(err){
			console.log(err);
		});
		
	};

/**
Find personnel object
*/
/*	$scope.searchPerson=function(){
		$scope.personnelFilter=[];
		$scope.myVar=false;
		$scope.myHiddenComposite=false;
		if ($scope.personnel._personnelFilter!=null&&$scope.personnel._personnelFilter!="") {
			angular.forEach($scope.personnelFlash,function(element){
				var personnelSearchFilter= element._typeOfConsultation;
				if (angular.isDefined(consultationType)&&consultationType.toLowerCase().indexOf($scope.consultation._consultationFilter.toLowerCase())!=-1) {
					//return data to form
					$scope.consultationFilter.push(element);
					$scope.myVar=true;
					$scope.myHiddenComposit=true;
				}
			});
		}
	};*/

	/**
	find all persons 
	*/
	$scope.searchAllPerson=function(){
				$scope.myAllVar=true;
	};
	/**
	Delete person object
	*/

	$scope.deletePerson=function(singlePersonnel){
		var id=singlePersonnel._cin;
		
			
			$http.delete('http://localhost:8080/OphtalmoDailyServer/staff/'+id).then(function(data){
				$scope.myHiddenComposit=false;
				$scope.myHiddenAllComposit=false;
				$scope.personnelFilter.splice($scope.personnelFilter.indexOf(singlePersonnel),1);
				$scope.personnelFlash.splice($scope.personnelFlash.indexOf(singlePersonnel),1);
				if ($scope.personnelFilter.length==0) {
					$scope.myVar=false;
				}
				if ($scope.personnelFlash.length==0) {
					$scope.myAllVar=false;
				}
			
		}).catch(function(err){
			console.log(err);
		});
	};

	/**
	Update Object Person
	*/
	$scope.updatePerson=function(singlePersonnel){
		$http.put('http://localhost:8080/OphtalmoDailyServer/staff/'+singlePersonnel._cin,singlePersonnel).then(function(data){
			var object=$scope.personnelFlash.find(singlePersonnel);
			$scope.personnelFlash.push(object);
		}).catch(function(err){
			console.log(err);
		});

	};


});