(function(){

    var app = angular.module("gitHubViewer",[]);



  

    var MainController = function($scope,$http){
       
        var onUserComplete = function(response){
            $scope.user = response.data;

        };

        var onError = function(reason){
            $scope.error = "no se pudieron obtener los datos";

        };
        $http.get("https://api.github.com/users/robconery")
             .then(onUserComplete,onError);
    }


    
    app.controller("MainController",["$scope","$http",MainController]);

})();