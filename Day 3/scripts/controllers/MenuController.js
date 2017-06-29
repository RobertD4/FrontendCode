hrApp.controller('MenuController', ['$scope', 'employeeActionsService', function($scope, employeeActionsService){
    "use strict";
    $scope.employeeActionList = [{
        url:'#/employeeslist',
        label:'Employee List'
    }];

    // TODO #12 - load menu items from Value
    for (var i in employeeActionsService) {
        $scope.employeeActionList.push(employeeActionsService[i]);
    }

    $scope.currentDate = new Date();

}]);
