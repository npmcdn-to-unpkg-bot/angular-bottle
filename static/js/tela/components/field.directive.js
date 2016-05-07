(function(){
    'use strict';
    angular.module("tela")
    .component('myField', {
        transclude: true,
        bindings: {
            valor: '='
        },
        controller: function($scope) {
            var self = null;
            this.$onInit = function() {
                self = this;
            };
        },
        templateUrl: 'static/js/tela/components/my-field.html'
    });
})();