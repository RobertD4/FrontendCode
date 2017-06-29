hrApp.controller('MathController', ['$scope', 'MathService', function($scope, MathService){
    "use strict";
    $scope.calculate = function() {
//        TODO #8 calculate op1, op2, op3, op4
//         $scope.op1 = $scope.numA + $scope.numB;
//         $scope.op2 = $scope.numA - $scope.numB;
//         $scope.op3 = $scope.numA * $scope.numB;
//         $scope.op4 = $scope.numA / $scope.numB;
//        TODO #13 refactor your calculations using MathService
        $scope.op1 = MathService.add($scope.numA,$scope.numB);
        $scope.op2 = MathService.substract($scope.numA,$scope.numB);
        $scope.op3 = MathService.multiply($scope.numA,$scope.numB);
        $scope.op4 = MathService.divide($scope.numA,$scope.numB);
    };

}]);
