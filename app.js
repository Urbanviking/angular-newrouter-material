'use strict';

angular.module('fitbird', [
  'ngAria',
  'ngAnimate',
  'ngMaterial',
  'ngNewRouter',
  'navigation',
  'user',
  'users',
  'services'
]).
  controller('AppController', ['$router', '$scope', '$mdSidenav', AppController]);

function AppController ($router, $scope, $mdSidenav) {
  $router.config([
    { path: '/',          redirectTo: '/users' },
    { path: '/users',     component: 'users' },
    { path: '/users/:id', component: 'user' },
  ]);
  this.title = 'FitBird';
  $scope.toggleLeft = function() {
    $mdSidenav('left').toggle()
  };
  $scope.close = function() {
    $mdSidenav('left').close()
  }
}
