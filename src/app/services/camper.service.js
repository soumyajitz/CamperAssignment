(function(){
    'use strict';

    angular.module('camperapp')
        .service('camperService', camperService);


    camperService.$inject = ['$http', '$q'];
    function camperService($http,$q){
        var self = this;

        self.getRecentPoints = getRecentPoints;
        function getRecentPoints(){
            console.log("Inside camper service");
            return $http.get("https://fcctop100.herokuapp.com/api/fccusers/top/recent")
                .then(successFn, errorFn);
        }

        function successFn(response) {
            return response.data;
        }

        function errorFn(response) {
            return $q.reject(error.status);
        }
    }
})();