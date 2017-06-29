hrApp.controller('EmployeeViewController', ['$scope', '$http', '$routeParams', 'commonResourcesFactory', '$location',
    function($scope, $http, $routeParams, commonResourcesFactory, $location) {
    "use strict";
        $scope.employee = {};

        // TODO #HR6 get employee by id
        $http.get(commonResourcesFactory.findOneEmployeeUrl + $routeParams.employeeid)
            .success(function(data) {
                $scope.employee = data;
                console.log($scope.employee.FirstName);
            })
            .error (function(status){
                alert("Error: " + status);
            });


        $scope.back = function() {
            // TODO back to Employee List page
            $location.url('/employeeslist');
        };

    }]);