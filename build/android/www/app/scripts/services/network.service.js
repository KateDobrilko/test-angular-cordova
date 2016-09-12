/**
 * Created by ekaterina.dobrilko on 9/7/2016.
 */
'use strict';
var appModule = angular.module('testAngularCordovaApp');

appModule.factory('NetworkProvider', NetworkProvider);

NetworkProvider.$inject = ['$http', '$q', 'EnvironmentConfig', 'AppConstants', 'LocalStorageService'];

function NetworkProvider($http, $q, EnvironmentConfig, AppConstants, LocalStorageService) {
    function _post(url, data) {
        var deferred = $q.defer();
        $http.post(url, data).then(function (data) {
            deferred.resolve(data);
        }, function (data) {
            deferred.reject(data);
        });
        return deferred.promise;
    }

    function _get(url, params) {
        var deferred = $q.defer();
        $http.get(url, {
            params: params,
            headers: {
                'X-AUTH-TOKEN': LocalStorageService.getItem(AppConstants.AUTH_TOKEN)
            }
        }).then(function (data) {
            deferred.resolve(data);
        }, function (data) {
            deferred.reject(data);
        });
        return deferred.promise;
    }

    function _getUsersList() {
        return _get(EnvironmentConfig.BASE_URL + '/account/users');
    }

    function _login(email, password) {
        return _post(EnvironmentConfig.BASE_URL + '/sign-in', {
            email: email,
            password: password
        });
    }

    function _logout() {
        return _get(EnvironmentConfig.BASE_URL + '/logout');
    }

    return {
        getUsersList: _getUsersList,
        login: _login,
        logout: _logout
    };
}

