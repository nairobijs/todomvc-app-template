 var TodoApp = angular.module('TodoApp', []);

 TodoApp.controller('TodoAppController', ['$scope', '$rootScope', 'listing', TodoAppController]);
 TodoApp.controller('TodoController', ['$scope', 'listing', TodoController]);

 // The main app controller, bigger than the one
 // below it since it wraps also the DOM belonging to the controllers below it
 function TodoAppController($scope, $rootScope, listing) {
     $scope.new_task = undefined;
     $scope.app_title = "Todo app list"

     $scope.addTask = function(form) {
         console.log("THE FORM", $scope.new_task);

         // Tell the other controllers a new task has been done
         // $rootScope.$broadcast('new_task_has_been_added', $scope.new_task);
         listing.add($scope.new_task);
         $scope.new_task = undefined;
     }
 }

 // Adding the modules as arguments that
 // have been injected above in the controller
 function TodoController($scope, listing) {
     $scope.todo_list = listing.get();

     $scope.setTask = function(is_done, $index) {
         listing.isDone(is_done, $index);
     }

     //      $scope.$on('new_task_has_been_added', function(event_emmitted, new_task) {
     //          console.log("A NEW TASK WAS ADDED", new_task)
     //
     //          var task = {
     //              task: new_task,
     //              is_done: false
     //          }
     //
     //          $scope.todo_list.push(task);
     //      });

     $scope.deleteTask = function($index) {
        console.log('IS CLICKED')
         listing.delete($index);
     }

 }
