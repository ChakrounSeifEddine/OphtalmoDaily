'use strict';

app.controller('consultationController',function($scope,$http){
	$scope.consultation={};
	$scope.consultationFilter=[];
	$scope.singleConsultation={};
	$scope.consultationFlash=[]
	$http.get('http://localhost:8080/OphtalmoDailyServer/consultation').then(function(data){
		$scope.consultationFlash=data.data;
	}).catch(function(err){
		console.log(err);
	});
/**
Add consultation object
*/
	$scope.saveConsultation=function(){
		$http.post('http://localhost:8080/OphtalmoDailyServer/consultation',$scope.consultation).then(function(data){
			$scope.myVar=false;
			$http.get('http://localhost:8080/OphtalmoDailyServer/consultation').then(function(data){
			$scope.consultationFlash=data.data;
			}).catch(function(err){
			console.log(err);
			});
		}).catch(function(err){
			console.log(err);
		});

	};
/**
Find consultation object
**/
	$scope.searchConsultation=function(){
		$scope.consultationFilter=[];
		$scope.myVar=false;
		$scope.myHiddenComposit=false;
		if ($scope.consultation._consultationFilter!=null&&$scope.consultation._consultationFilter!="") {
			angular.forEach($scope.consultationFlash,function(element){
				var consultationType= element._typeOfConsultation;
				if (angular.isDefined(consultationType)&&consultationType.toLowerCase().indexOf($scope.consultation._consultationFilter.toLowerCase())!=-1) {
					//return data to form
					$scope.consultationFilter.push(element);
					$scope.myVar=true;
					$scope.myHiddenComposit=true;
				}
			});
		}
	};

	/**
	find all consultations 
	*/
	$scope.searchAllConsultation=function(){
				$scope.myAllVar=true;
				
					
	};

	/**
	Delete consultation object
	*/

	$scope.deleteConsultation=function(singleConsultation){
		var id=singleConsultation._id;
		
			
			$http.delete('http://localhost:8080/OphtalmoDailyServer/consultation/'+id).then(function(data){
				$scope.myHiddenComposit=false;
				$scope.myHiddenAllComposit=false;
				$scope.consultationFilter.splice($scope.consultationFilter.indexOf(singleConsultation),1);
				$scope.consultationFlash.splice($scope.consultationFlash.indexOf(singleConsultation),1);
				if ($scope.consultationFilter.length==0) {
					$scope.myVar=false;
				}
				if ($scope.consultationFlash.length==0) {
					$scope.myAllVar=false;
				}
			
		}).catch(function(err){
			console.log(err);
		});
	};

	/**
	Update Object Consultation
	*/
	$scope.updateConsultation=function(singleConsultation){
		$http.put('http://localhost:8080/OphtalmoDailyServer/consultation/'+singleConsultation._id,singleConsultation).then(function(data){
			var object=$scope.consultationFlash.find(singleConsultation);
			$scope.consultationFlash.push(object);
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