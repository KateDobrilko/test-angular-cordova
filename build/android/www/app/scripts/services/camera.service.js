/**
 * Created by ekaterina.dobrilko on 9/7/2016.
 */
'use strict';
var appModule = angular.module('testAngularCordovaApp');

appModule.factory('CameraService', CameraService);
CameraService.$inject = ['$q'];

function CameraService($q) {
    function _getPicture() {
        var deferred = $q.defer();
        navigator.camera.getPicture(function (data) {
            deferred.resolve(data);
        }, function (data) {
            deferred.reject(data);
        });
        return deferred.promise;
    }

    return {
        getPicture: _getPicture
    };
}

