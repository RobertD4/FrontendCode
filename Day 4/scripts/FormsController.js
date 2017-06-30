/**
 * Created by Robert.Dumitrescu on 6/30/2017.
 */
hrApp.controller('FormsController',['$scope',function($scope){

    $scope.submit = function(){
        if($scope.myForm.$valid === true) {
           // $scope.buton = $scope.myForm;
           // console.log($scope.buton);
            alert('Trimis!');
        }
    }
}]);
