// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic',  'starter.controllers', 'starter.services', 'ngResource', 'ionic.contrib.ui.tinderCards'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})
.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
  $httpProvider.defaults.withCredentials = true;
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.login', {
    url: '/login',
    views: {
      'menuContent': {
        templateUrl: 'templates/login.html',
		controller: 'LoginCtrl'
      }
    }
  })

  .state('app.yourFriends', {
      url: '/yourFriends',
      views: {
        'menuContent': {
          templateUrl: 'templates/yourFriends.html'
        }
      }
    })
	
  .state('app.contactUs', {
      url: '/contactUs',
      views: {
        'menuContent': {
          templateUrl: 'templates/contactUs.html'
        }
      }
    })
	  .state('app.profilePage', {
      url: '/profilePage',
      views: {
        'menuContent': {
          templateUrl: 'templates/profilePage.html',
          controller: 'ProfileController'
        }
      }
    })
	.state('app.EventCardPage', {
      url: '/EventCardPage',
      views: {
        'menuContent': {
          templateUrl: 'templates/EventCardPage.html',
		  controller: 'EventCardCtrl'
        }
      }
    })
	  .state('app.createEvent', {
      url: '/createEvent',
      views: {
        'menuContent': {
          templateUrl: 'templates/createEvent.html',
		  controller: 'CreateCtrl'
        }
      }
    })
 .state('app.discover', {
      url: '/discover',
      views: {
        'menuContent': {
          templateUrl: 'templates/discover.html',
		  controller:'EventCtrl'
        }
      }
    })
.state('app.yourPlans', {
  url: '/yourPlans',
  views: {
	'menuContent': {
	  templateUrl: 'templates/yourPlans.html'
	}
  }
})
.state('app.discover2', {
  url: '/discover2',
  views: {
	'menuContent': {
	  templateUrl: 'templates/discover2.html',
	  controller: 'EventCtrl'
	}
  }
})
.state('app.discoverTinder', {
	url: '/discoverTinder',
	views: {
		'menuContent': {
			templateUrl: 'templates/discoverTinder.html',
			controller: 'CardsCtrl'
		}
	}
})
.state('app.yourPlansNew', {
	url: '/yourPlansNew',
	views: {
		'menuContent': {
			templateUrl: 'templates/yourPlans2.html',
			controller: 'EventCtrl'
		}
	}
})
.state('app.addFriend', {
  url: '/addFriend',
  views: {
	'menuContent': {
	  templateUrl: 'templates/addFriend.html',
	  controller: 'EventCtrl'
	}
  }
})

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/login');

});