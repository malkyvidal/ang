(function(){

    var app = angular.module("gitHubViewer",[]);



  

    var MainController = function($scope,$http){
       
        
        var onRepos = function(response){
            $scope.repos = response.data;

        }

        var onUserComplete = function(response){
            $scope.user = response.data;
            $http.get($scope.user.repos_url)
                 .then(onRepos,onError);

        };

        var onError = function(reason){
            $scope.error = "no se pudieron obtener los datos";

        };
        

        $scope.search = function(username){
            
            /*$http.get("https://api.github.com/users/"+$scope.username)
                    .then(onUserComplete,onError); 
                    usar esto si no quiero recibir el parametro desde la vista
                    */
             $http.get("https://api.github.com/users/"+username)
                    .then(onUserComplete,onError);

        }
        $scope.countdown = 5;
        $scope.username = "angular";
        $scope.repoSortOrder ="+name";
    }


    
    app.controller("MainController",["$scope","$http",MainController]);

})();