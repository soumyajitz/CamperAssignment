(function(){
    'use strict';

    angular.module('camperapp')
        .controller('CamperController', CamperController);

    CamperController.$inject = ['camperService'];
    function CamperController(camperService){
        var camperVm = this;

        camperVm.sorter = {
            by: 'recent',
            reverse: false
        };

        camperVm.toggleSort = toggleSort;
        init();

        function init(){
            console.log("Inside camper controller");

            camperService.getRecentPoints()
                .then(function (data) {
                    camperVm.camper = data;
                    console.dir(camperVm.camper);
                })
                .catch(function (error) {
                    console.log(error);
                })
        }

        function toggleSort(prop) {
            console.log(prop);
            camperVm.sorter.by = prop;
            camperVm.sorter.reverse = !camperVm.sorter.reverse;
        }
    }
})();