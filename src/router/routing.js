'use strict';

/*app.config(
    function($routeProvider) { 
        
        // Système de routage
        $routeProvider
        .when('/city', {
            templateUrl: 'views/cityviews/city.html',
            controller:'CityController'
            
        })
        ;
    });*/

    app.config(
function($stateProvider, $urlRouterProvider){
	
	$stateProvider.
    state('city',{
		url:"/city",
		templateUrl: 'views/cityviews/city.html',
        controller:'CityController'

	})
    .state('consultation',{
        url:"/consultation",
        templateUrl:"views/consultation.html",
        controller: 'consultationController'

    })
    .state('personnel',{
        url:"/personnel",
        templateUrl:"views/personnel.html",
        controller:"personnelController"
    })
    .state("facturation",{
        url:'/facturation',
        templateUrl:"views/facturation.html",
        controller:"facturationController"
    })

    ;
	
}


    	);