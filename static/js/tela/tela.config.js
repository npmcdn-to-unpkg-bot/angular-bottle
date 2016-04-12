(function() {
    'use strict';
    angular.module('tela')
    .config(function($interpolateProvider){
        $interpolateProvider.startSymbol('({').endSymbol('})');
    });
 })();