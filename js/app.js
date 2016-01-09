angular.module('LOLapp', ['postModule', 'profileModule', 'homeModule', 'mapModule', 'firebase', 'ui.router', 'loginModule', 'luegg.directives']);

angular.module('LOLapp').run(['$state', function($state) {
    $state.go('loginPage');
}]);
