/**
 * Created by ekaterina.dobrilko on 9/7/2016.
 */
'use strict';
var constantsProviderModule = angular.module('core.constants', []);

constantsProviderModule.constant('AppConstants',
    {
        AUTH_TOKEN: 'X-AUTH-TOKEN'
    }
);
