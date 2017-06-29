hrApp.controller('EmployeeListController', ['$scope', '$http', '$location','commonResourcesFactory',
    function ($scope, $http, $location,commonResourcesFactory ) {
// TODO #HR2 - inject commonResourcesFactory
        "use strict";
        $scope.employees = []; // Employee list


        //TODO #HR3 Load employee list from server using commonResourcesFactory
        $scope.url = commonResourcesFactory.findAllEmployeesUrl;
        $http.get($scope.url)
            .success(function(data) {
                $scope.employees = data;
            })
            .error (function(status){
                alert("Error: " + status);
            });



        $scope.viewEmployee = function (employeeId) {
            $location.url('/employeeview/' + employeeId);
        };


    }]);