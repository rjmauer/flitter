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
.controller('CreateCtrl', function($scope, $http, $ionicPopup) {
  // create a blank object to handle form data.
	$scope.party = {};
	 var y = document.getElementById("eventForm");
	 var z = document.getElementById("loc");
	 
  // calling our submit function.
    $scope.submitForm = function() {
			console.log($scope.party.time);
		$scope.events = {
			"event": {"title": $scope.party.title, "date": $scope.party.date, "time":$scope.party.time, "description": $scope.party.description}
		};

		$http({
		  method  : 'POST',
		  url     : 'http://localhost:3000/events',
		  data    : $scope.events 
		 })
		  var confirmPopup = $ionicPopup.alert({
        title: 'Your event has been created.',
      });
	y.reset();
	z.innerHTML="Location";
    };
	
	var x = document.getElementById("loc");
	$scope.getLocation = function() {
		
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(showPosition);
		} else {
			x.innerHTML = "Geolocation is not supported by this browser.";
		}
		
	}
	showPosition = function(position) {
		x.innerHTML = "(" + position.coords.latitude + 
    "," + position.coords.longitude+")";  
	}
	
})
.controller('EventCtrl', function($scope,$location, Events) {
	var count = 0;

	 Events.query().$promise.then(function(response){
		 if(response.length>1)
		$scope.eventslol = [response[Math.floor(Math.random() * response.length-1)]];
	else
		$scope.eventslol = [response[0]];
	  });
	 $scope.newEvent = function(){
		 count++;
		 
		 Events.query().$promise.then(function(response){
			if(count>=response.length){
				count = 0;
			}
			$scope.eventslol = [response[count]];
		});
	 }
	$scope.go  = function ( path ) {
	  $location.path( path );
	};
})
.controller('EventCardCtrl',function($scope,$location, Events) {

	 Events.query().$promise.then(function(response){
		 
		$scope.eventslol = [response[Math.floor(Math.random() * response.length-1)]];
	  });
	 
	/*$scope.go  = function ( path ) {
	  $location.path( path );
	};*/
})