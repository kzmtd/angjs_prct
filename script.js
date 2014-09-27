var myApp = angular.module('myApp', []);
myApp.controller('mainCtrl', function($scope){
    $scope.items = [
        {name:'Taro', value:1},
        {name:'Jiro', value:2},
        {name:'Saburo', value:3},
        {name:'Shiro', value:4},
        ];
    $scope.today = new Date();
    $scope.addUser = function(){};
});

