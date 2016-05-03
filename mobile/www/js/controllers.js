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
	 
    $scope.submitForm = function(){
			console.log($scope.party.time);

		$scope.events = {
			"event": {"image": $scope.party.img, "title": $scope.party.title, "date": $scope.party.date, "time":$scope.party.time, "location": $scope.party.loc, "description": $scope.party.description }
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
    };
	
	
	$scope.getLocation = function() {
		
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(showPosition);
		} else {
			
			window.alert( "Geolocation is not supported by this browser.");
		}
		
	}
	showPosition = function(position) {
		var x = document.getElementById("loc");
		x.value = "(" + position.coords.latitude + 
    "," + position.coords.longitude+")";  
	}
})


.controller('EventCtrl', function($scope,$location, Events) {
	var count = 0;
	var	toGo;
	var myImg = "";
	
	 Events.query().$promise.then(function(response){
		console.log(response.length);
		if(response.length>1){
			//count = Math.floor(Math.random() * response.length-1);
			$scope.eventslol = [response[0]];
			toGo = $scope.eventslol[0].id;
			myImg="http://localhost:3000/"+response[0].image;
		}else{
			$scope.eventslol = [response[0]];
			toGo = response[0].id;
			myImg="http://localhost:3000/"+response[0].image;
			//currentEvent.href =  "/#/app/EventCardPage?eventId=";
		 }
	  });
	 $scope.newEvent = function(){
		 var currents = document.getElementById("currentEvent");
		 count++;
		 Events.query().$promise.then(function(response){
			if(count>=response.length){
				count = 0;
			}
			$scope.eventslol = [response[count]];
			toGo = response[count].id;
			myImg="http://localhost:3000/"+response[count].image;
		
			//currentEvent.href = "/#/app/EventCardPage?eventId=" + response[count].id;
		});
	 }
	$scope.goTo  = function () {
		document.getElementById("currentEvent").href = "/#/app/EventCardPage?eventId="+toGo;
	};

	
	//CARD CONTROLLERS//
	var cardTypes = [
    { image: '/img/bbq.jpg' },
    { image: '/img/bbq.jpg' },
    { image: '/img/bbq.jpg' },
    { image: '/img/bbq.jpg'}
  ];

  $scope.cards = Array.prototype.slice.call(cardTypes, 0);

  $scope.cardDestroyed = function(index) {
    $scope.cards.splice(index, 1);
  };

  $scope.addCard = function() {
    var newCard = cardTypes[Math.floor(Math.random() * cardTypes.length)];
    newCard.id = Math.random();
    $scope.cards.push(angular.extend({}, newCard));
  }
})

.controller('EventCardCtrl',function($scope,$location, Events) {
	var page = window.location.href;
	var id;
	for(var i =0; i<page.length; i++){
		if(page.charAt(i)=="="){
			id  = page.substring(i+1);
		}
	}
	var myImg = "";
	Events.query().$promise.then(function(response){
		 
		$scope.eventslol = [response[id-1]];
		//window.alert($scope.eventslol[0].image);
		myImg = "http://localhost:3000/" +response[id-1].image;
		
	});
	$scope.getPic = function() {
		console.log("here");
		 var x = document.getElementById("eventImg");
		 x.src = myImg;
		 console.log(x.src);
    };

 
})

.directive('noScroll', function() {

  return {
    restrict: 'A',
    link: function($scope, $element, $attr) {

      $element.on('touchmove', function(e) {
        e.preventDefault();
      });
    }
  }
})

.controller('CardsCtrl', function($scope, TDCardDelegate, Events) {
	var cardTypes = [];
	
	Events.query().$promise.then(function(response){
		for(var i = 0; i<response.length; i++){
			cardTypes[i]= response[i];
			cardTypes[i].toGo = "/#/app/EventCardPage?eventId="+(i+1);
			
		}
	  //cardTypes = [{image:response[0].image}, {image:response[1].image}];
  /*var cardTypes = [
    { image: '/img/bbq.jpg' },
    { image: '/img/bbq.jpg' },
    { image: '/img/bbq.jpg' },
    { image: '/img/bbq.jpg'}
  ];*/

  $scope.cards = Array.prototype.slice.call(cardTypes, 0);

  $scope.cardDestroyed = function(index) {
    $scope.cards.splice(index, 1);
  };

  $scope.addCard = function() {
    var newCard = cardTypes[Math.floor(Math.random() * cardTypes.length)];
    newCard.id = Math.random();
    $scope.cards.push(angular.extend({}, newCard));
  }
  });
})

  .controller('CardCtrl', function($scope, TDCardDelegate) {
  $scope.cardSwipedLeft = function(index) {
    //console.log('LEFT SWIPE');
    $scope.addCard();
  };
  $scope.cardSwipedRight = function(index) {
    //console.log('RIGHT SWIPE');
    $scope.addCard();
  };
  
})

.controller('ProfileController', function($scope, $ionicPopover) {

  // .fromTemplate() method
  var template = '<ion-popover-view><ion-header-bar> <h1 class="title">My Popover Title</h1> </ion-header-bar> <ion-content> Hello! </ion-content></ion-popover-view>';

  $scope.popover = $ionicPopover.fromTemplate(template, {
    scope: $scope
  });

  // .fromTemplateUrl() method
  $ionicPopover.fromTemplateUrl('popover.html', {
    scope: $scope
  }).then(function(popover) {
    $scope.popover = popover;
  });


  $scope.openPopover = function($event) {
    $scope.popover.show($event);
  };
  $scope.closePopover = function() {
    $scope.popover.hide();
  };
  //Cleanup the popover when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.popover.remove();
  });
  // Execute action on hide popover
  $scope.$on('popover.hidden', function() {
    // Execute action
  });
  // Execute action on remove popover
  $scope.$on('popover.removed', function() {
    // Execute action
  });
  
});
