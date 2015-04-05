(function() {
  'use strict';

  angular.module('navigation', []).
    controller('NavigationController', [NavigationController]);

  function NavigationController() {
    this.title = 'Navigation';
  };
})();
