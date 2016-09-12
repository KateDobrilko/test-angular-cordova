var appModule = angular.module('testAngularCordovaApp');
appModule.controller('LoginController', LoginController);
LoginController.$inject = ['$scope', 'SessionService'];

function LoginController($scope, SessionService) {
    $scope.userData = {
        email: '',
        password: ''
    };
    $scope.login = function () {
        SessionService.login($scope.userData.email, $scope.userData.password);
    }
}