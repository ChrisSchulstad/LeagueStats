angular.module('LOLapp', ['firebase', 'ui.router', 'loginModule', 'luegg.directives']);

angular.module('LOLapp').run(['$state', function($state) {
    $state.go('loginPage');
}]);
