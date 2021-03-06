angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})
.controller('LoginCtrl', function($scope, $location/*, UserSession, $ionicPopup, $rootScope*/) {
	$scope.login = function(){
		$location.path('/app/discover');
		location.reload();
}
/*$scope.data = {};

$scope.login = function() {
  var user_session = new UserSession({ user: $scope.data });
  user_session.$save(
    function(data){
      window.localStorage['userId'] = data.id;
      window.localStorage['userName'] = data.name;
      $location.path('/tab/dash');
    },
    function(err){
      var error = err["data"]["error"] || err.data.join('. ')
      var confirmPopup = $ionicPopup.alert({
        title: 'An error occured',
        template: error
      });
    }
  );
}*/
})
.controller('CreateCtrl', function($scope/*, $http*/) {
 /* // create a blank object to handle form data.
	$scope.party = {};
  // calling our submit function.
    $scope.submitForm = function() {
			console.log($scope.party.title);
		$scope.events = {
			"event": {"title": $scope.party.title, "description": $scope.party.description}
		};

		$http({
		  method  : 'POST',
		  url     : 'http://localhost:3000/events',
		  data    : $scope.events //forms user object
		 })
    };*/
})
.controller('EventCtrl', function($scope,$location, Events) {
	$scope.newEvent = function(){
		$location.path('/app/discover2');
		location.reload();
	}
	$scope.newEvent2 = function(){
		$location.path('/app/discover');
		location.reload();
	}
  Events.query().$promise.then(function(response){
    $scope.eventslol = response;
  });
$scope.go = function ( path ) {
  $location.path( path );
};
})