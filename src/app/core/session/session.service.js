/**
 * Created by ekaterina.dobrilko on 9/7/2016.
 */
'use strict';
angular.module('core.session').factory('SessionProvider', SessionProvider)

SessionProvider.$inject = ['LocalStorageProvider', 'AppConstants'];

function SessionProvider(LocalStorageProvider, AppConstants) {

    function _login(email, password) {
    }

    function _logOut() {
        LocalStorageProvider.removeItem(AppConstants.AUTH_TOKEN);
    }

    function isUserAuthorized():boolean {
        return this.StorageProvider.getItem(this.globalConstants.AUTH_TOKEN) ? true : false;
    }

    setInviteHash(hash:string) {
        this.inviteHash = hash;
    }

    private _validateToken(token: string) {
        return ( typeof token === 'string' && token.length > 10 ) ? true : false;
    }

    return {
        login: _login,
        logOut: _logOut
    }

}
