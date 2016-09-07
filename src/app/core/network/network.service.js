/**
 * Created by ekaterina.dobrilko on 9/7/2016.
 */
'use strict';

angular.module('core.network').factory('NetworkProvider', NetworkProvider)

NetworkProvider.$inject = ['$resource', 'Configuration', 'AppConstants', 'LocalStorageProvider'];

function NetworkProvider($resource, Configuration, AppConstants, LocalStorageProvider) {

    function _getUsersList() {
        return $resource(Configuration.BASE_URL + Configuration.API_URL + '/account/users', {}, {
            query: {
                method: 'GET',
                headers: {
                    'X-AUTH_TOKEN': LocalStorageProvider.getItem(AppConstants.AUTH_TOKEN)
                },
                isArray: true            }
        });
    }

    return {
        getUsersList: _getUsersList()
    };
}

