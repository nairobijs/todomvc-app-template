 var TodoApp = angular.module('TodoApp', []);

 TodoApp.controller('TodoAppController', ['$scope', TodoAppController]);
 TodoApp.controller('TodoController', ['$scope', TodoController]);

 // The main app controller, bigger than the one 
 // below it since it wraps also the DOM belonging to the controllers below it
 function TodoAppController($scope) {
     $scope.app_title = "Todo app list"
 }

 // Adding the modules as arguments that
 // have been injected above in the controller
 function TodoController($scope) {
     $scope.todo_list = [{
         is_done: false,
         task: "Dance in Honolulu"
     }, {
         is_done: false,
         task: "Watch Manny beat Mayweather"
     }, {
         is_done: true,
         task: "Go to shaping up with Angularjs"
     }, {
         is_done: false,
         task: "Get a girlfriend for once in my life"
     }, {
         is_done: false,
         task: "Take a shower too"
     }];

     $scope.setTask = function (is_done, $index) {
         console.log("IS THE TASK DONE?", is_done, $index);

         // check if the task is done
         // if it was done make it undone
         // and viceversa
         var done = is_done == true ? false : true;
         $scope.todo_list[$index].is_done = done;
     }
 }