'use strict';

angular.module('engageCincinnatiApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('create', {
        url: '/events/create',
        templateUrl: 'app/events/create/create.html',
        controller: 'CreateCtrl'
      });
  });