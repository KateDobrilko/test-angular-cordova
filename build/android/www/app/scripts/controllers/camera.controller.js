var appModule = angular.module('testAngularCordovaApp');
appModule.controller('CameraController', CameraController);
CameraController.$inject = ['$scope', 'LocalStorageService', 'AppConstants', 'NetworkProvider', '$log', '$state', 'CameraService'];

function CameraController($scope, LocalStorageService, AppConstants, NetworkProvider, $log, $state, CameraService) {
    $scope.imagePath = '';
    $scope.logOut = function () {
        NetworkProvider.logout().then(function (response) {
            if (response.status == 200) {
                LocalStorageService.removeItem(AppConstants.AUTH_TOKEN);
                $state.go('login');
            }
            else {
                $log.error('Unable to reach the server');
            }
        });

    }

    $scope.getPicture = function () {
        CameraService.getPicture().then(function (response) {
            $scope.imagePath = response;
        });
    }
}