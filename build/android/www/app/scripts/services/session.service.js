/**
 * Created by ekaterina.dobrilko on 9/7/2016.
 */
'use strict';
var appModule = angular.module('testAngularCordovaApp');

appModule.factory('SessionService', SessionService);

SessionService.$inject = ['LocalStorageService', 'AppConstants', 'NetworkProvider', '$log', '$state'];

function SessionService(LocalStorageService, AppConstants, NetworkProvider, $log, $state) {

    function _login(email, password) {
        var context = this;
        NetworkProvider.login(email, password).then(function (response) {
            if (response.status == 200) {
                if (context.validateToken(response.data[AppConstants.AUTH_TOKEN])) {
                    LocalStorageService.setItem(AppConstants.AUTH_TOKEN, response.data[AppConstants.AUTH_TOKEN]);
                    $state.go('users', {}, {location: true});
                } else {
                    $log.error('TokenError');
                }
            }
            else {
                $log.error('Unable to reach the server');
            }
        });
    }

    function _logOut() {
        LocalStorageService.removeItem(AppConstants.AUTH_TOKEN);
    }

    function _isUserAuthorized() {
        return LocalStorageService.getItem(AppConstants.AUTH_TOKEN) ? true : false;
    }

    function _validateToken(token) {
        return (angular.isString(token) && (token.length > 10));
    }

    return {
        login: _login,
        logOut: _logOut,
        isUserAuthorized: _isUserAuthorized,
        validateToken: _validateToken
    }

}
