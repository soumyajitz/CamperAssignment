(function(){
    'use strict';

    angular.module('camperapp',['ngRoute'])
        .config(moduleConfig);

    moduleConfig.$inject = ['$routeProvider'];
    function moduleConfig($routeProvider){

        $routeProvider
            .when('/',{
                templateUrl:'app/views/camperboard.tmpl.html',
                controller:'CamperController',
                controllerAs:'camperVm'
            })
            .otherwise({
                redirectTo:'/'
            })
    }
})();