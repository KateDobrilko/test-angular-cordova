var testAngularCordovaApp = angular.module('testAngularCordovaApp', [
    'ui.router',
    'ui.gravatar'
]);

testAngularCordovaApp.config(
    [
        '$compileProvider',
        '$logProvider',
        '$httpProvider',
        '$stateProvider',
        '$urlRouterProvider',
        'gravatarServiceProvider',
        function ($compileProvider, $logProvider, $httpProvider, $stateProvider, $urlRouterProvider, gravatarServiceProvider) {
            gravatarServiceProvider.secure = true;
            $httpProvider.defaults.useXDomain = true;
            $httpProvider.defaults.withCredentials = true;
            $compileProvider.debugInfoEnabled(true);
            $logProvider.debugEnabled(true);
            $urlRouterProvider.otherwise('/login');
            $stateProvider
                .state('login', {
                    url: '/login',
                    controller: 'LoginController',
                    templateUrl: 'app/templates/login.template.html'
                })
                .state('camera', {
                    url: '/camera',
                    controller: 'CameraController',
                    templateUrl: 'app/templates/camera.template.html'
                })
                .state('users', {
                    url: '/users',
                    controller: 'UserListController',
                    templateUrl: 'app/templates/users-list.template.html'
                });
        }])
    .run([
        '$rootScope',
        'SessionService',
        '$state',
        function ($rootScope, SessionService, $state) {
            $rootScope.$on('$stateChangeStart', function (event, toState) {
                if (!SessionService.isUserAuthorized() && toState.name !== 'login') {
                    event.preventDefault();
                    $state.go('login');
                }
            });
        }]);
