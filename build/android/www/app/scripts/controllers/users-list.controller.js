var appModule = angular.module('testAngularCordovaApp');
appModule.controller('UserListController', UserListController);
UserListController.$inject = ['$scope', 'LocalStorageService', 'AppConstants', 'NetworkProvider', '$log', '$state'];

function UserListController($scope, LocalStorageService, AppConstants, NetworkProvider, $log, $state) {
    $scope.usersList = [];

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

    function loadUsers() {
        var context = this;
        NetworkProvider.getUsersList().then(function (response) {
            if (response.status == 200) {
                if (response.data["employers"]) {
                    $scope.usersList = response.data["employers"];
                } else {
                    $log.error('TokenError');
                }
            }
            else {
                $log.error('Unable to reach the server');
            }
        });
    }


    (function initialize() {
        loadUsers();
    })();
}