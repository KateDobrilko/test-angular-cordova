/**
 * Created by ekaterina.dobrilko on 9/7/2016.
 */
'use strict';
angular.module('core.localStorage').factory('LocalStorageService', LocalStorageService)

function LocalStorageService() {
    function _getItem(name) {
        return localStorage.getItem(name);
    }

    function _setItem(name, value) {
        localStorage.setItem(name, value);
    }

    function _removeItem(name) {
        localStorage.removeItem(name);
    }

    return {
        getItem: _getItem,
        setItem: _setItem,
        removeItem: _removeItem
    };
}

