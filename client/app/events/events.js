'use strict';

angular.module('engageCincinnatiApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('events', {
        url: '/events',
        templateUrl: 'app/events/events.html',
        controller: 'EventsCtrl'
      });
  });
  
