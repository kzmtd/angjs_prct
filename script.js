var myApp = angular.module('myApp', []);
myApp.controller('mainCtrl', function(){
    this.items = [
        {name:'Taro', value:1},
        {name:'Jiro', value:2},
        {name:'Saburo', value:3},
        {name:'Shiro', value:4},
        ];
    this.today = new Date();
    this.addUser = function(){};
});

