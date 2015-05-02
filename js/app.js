 var TodoApp = angular.module('TodoApp', []);

 TodoApp.controller('TodoAppController', ['$scope', '$rootScope', TodoAppController]);
 TodoApp.controller('TodoController', ['$scope', TodoController]);

 // The main app controller, bigger than the one
 // below it since it wraps also the DOM belonging to the controllers below it
 function TodoAppController($scope, $rootScope) {
     $scope.new_task = null;
     $scope.app_title = "Todo app list"

     $scope.addTask = function(form) {
         console.log("THE FORM", $scope.new_task);

         // Tell the other controllers a new task has been done
         $rootScope.$broadcast('new_task_has_been_added', $scope.new_task);
     }
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

     $scope.setTask = function(is_done, $index) {
         console.log("IS THE TASK DONE?", is_done, $index);

         // check if the task is done
         // if it was done make it undone
         // and viceversa
         var done = is_done == true ? false : true;
         $scope.todo_list[$index].is_done = done;
     }

     $scope.$on('new_task_has_been_added', function(event_emmitted, new_task) {
         console.log("A NEW TASK WAS ADDED", new_task)

         var task = {
             task: new_task,
             is_done: false
         }

         $scope.todo_list.push(task);
     });

 }
