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
	
	$stateProvider.state('city',{
		url:"/city",
		templateUrl: 'views/cityviews/city.html',
            controller:'CityController'

	});
	
}


    	);