// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ngResource'])

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
        templateUrl: 'templates/login.html'
		//controller: 'LoginCtrl'
      }
    }
  })

  .state('app.settings', {
      url: '/settings',
      views: {
        'menuContent': {
          templateUrl: 'templates/settings.html'
        }
      }
    })
	  .state('app.profilePage', {
      url: '/profilePage',
      views: {
        'menuContent': {
          templateUrl: 'templates/profilePage.html'
        }
      }
    })
	  .state('app.createEvent', {
      url: '/createEvent',
      views: {
        'menuContent': {
          templateUrl: 'templates/createEvent.html'
        }
      }
    })
<<<<<<< HEAD
    .state('app.discover', {
      url: '/discover',
=======
    .state('app.yourPlans', {
      url: '/yourPlans',
      views: {
        'menuContent': {
          templateUrl: 'templates/yourPlans.html'
        }
      }
    })
    .state('app.playlists', {
      url: '/playlists',
>>>>>>> 67bc2f7a13348acc31f48d1304b2e61cc2784a29
      views: {
        'menuContent': {
          templateUrl: 'templates/discover.html',
          controller: 'EventCtrl'
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
  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/discover');
});
