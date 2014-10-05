var myApp = angular.module('myApp', []);
myApp.controller('mainCtrl', function(){
    this.tasks = [
    	{"body":"do this 1", "done":false},
    	{"body":"do this 2", "done":false},
    	{"body":"do this 3", "done":true},
    	{"body":"do this 4", "done":false},
    ];
    this.addNew = function(){
    	this.tasks.push({"body":this.newTaskBody, "done":false});
    	this.newTaskBody ='';
    }
    this.getDoneCount = function(){
    	var count = 0;
    	angular.forEach(this.tasks, function(task){
    		count += task.done ? 1 : 0;
    	});
    	return count;
    }
    this.deleteDone = function(){
    	var  newTasks = [];
    	angular.forEach(this.tasks, function(task){
    		if (!task.done) {
    			newTasks.push(task);
    		};
    	});
    	this.tasks = newTasks;
    }
    this.deleteTask = function(){
    	console.log(index);
    }
});

