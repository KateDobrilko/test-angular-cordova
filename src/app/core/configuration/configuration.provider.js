/**
 * Created by ekaterina.dobrilko on 9/7/2016.
 */
'use strict';
var configurationProviderModule = angular.module('core.configuration', []);

configurationProviderModule.constant('Configuration',
    {
        BASE_URL: 'http://chat-dev.exposit-ds.com',
        API_URL: '/api'
    }
);
