var myApp = angular.module("myApp",[]);
   
     myApp.controller("myController", function($scope) {
                 console.log("Going Right Direction...!");

   $scope.clickedUser = {};
   $scope.message = "";
    
   $scope.newUser = {};

    $scope.users = [
           {username:"chetan", fullname:"tayade",email:"chetantayade@gmail.com"},
           {username:"username",fullname:"pande",email:"emaeil.com"},
           {username:"ABC",fulname:"ABCXYZ",email:"email@example.com"}

    ];

   $scope.saveUser = function(){
   	//console.log($scope.newUser);
   	$scope.users.push($scope.newUser);
   	$scope.newUser = {};
   	$scope.message= "new user added suucdesuffulllly";
   };


   $scope.selectUser = function(user){
   	console.log(user);
   	$scope.clickedUser = user;
   };

   $scope.updateUser = function(){
   	$scope.message="updates succesfullly!"


   };

   $scope.clearMessage = function(){
   	$scope.message = "";
   };


   $scope.deleteUser = function(){
   	$scope.users.splice($scope.users.indexof($scope.clickedUser),1)
   	$scope.message = "User Deleted Succesfully";
   };



     }); 