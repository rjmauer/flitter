angular.module('starter.services', [])
.factory('Events', function($resource) {
  return $resource("http://localhost:3000/events/:id.json");
})

.factory('UserSession', function($resource) {
  return $resource("http://localhost:3000/users/sign_in.json");
})

;
