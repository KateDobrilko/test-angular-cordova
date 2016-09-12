/**
 * Created by ekaterina.dobrilko on 9/7/2016.
 */
'use strict';
var appModule = angular.module('testAngularCordovaApp');

appModule.constant('EnvironmentConfig',
    {
        BASE_URL: 'http://chat-dev.exposit-ds.com',
        API_URL: '/api'
    }
);
