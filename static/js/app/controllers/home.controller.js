(function() {
    'use strict';
    angular.module('app')
    .controller('HomeController', ['$scope', function($scope) {
        $scope.greeting = 'Hola!';
        $scope.valor = 'Dá valor';
        $scope.nome = 'Neno';
    }]);
 })();