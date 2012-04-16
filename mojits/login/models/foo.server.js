/*
 * Copyright (c) 2012 Yahoo! Inc. All rights reserved.
 */
YUI.add('loginModelFoo', function(Y) {

/**
 * The loginModelFoo module.
 *
 * @module login
 */

    /**
     * Constructor for the loginModelFoo class.
     *
     * @class loginModelFoo
     * @constructor
     */
    Y.mojito.models.loginModelFoo = {

        init: function(config) {
            this.config = config;
            this.Appdomain = config.Appdomain;
            this.Appid = config.Appid;
            this.Appsecret = config.Appsecret;
            this.Fb_permissions = "user_location,friends_location,publish_stream,user_status,friends_status";
            this.fbauthhost = config.fbauthhost;
        },

        /**
        * Method that will be invoked by Mojit controller to get Access_token of facebook 
        *
        * @param1 code {string} contains the fb auth code necessary for access_token
        * @param2 redirect_uri {string} is the uri to be redirected to after authentication is completed from facebook
        * @param3 callback {function} called after retrieval of access_token
        */
        getAccessToken: function(code,redirect_uri,callback){
            var fb_config = {},params =  {};
            var fb_auth_host = "https://graph.facebook.com/oauth/access_token?",
                client_id = this.Appid,
                client_secret = this.Appsecret,//"cc6992d8bee3265cf5547bc7a3d0719a",
                allowed_permissions = this.Fb_permissions,
                fb_get_accesstoken_url = fb_auth_host +"client_id="+client_id + "&redirect_uri="+redirect_uri+"&client_secret=" + client_secret + "&code=" +code;
            var self = this;
            Y.mojito.lib.REST.GET(fb_get_accesstoken_url, params, fb_config, function(err,response) {
                if (err) {
                    return callback(err,null);
                }
                else if(response) {
                    var access_token = response.getBody();
                    return callback(null,access_token);
                } else {
                    return callback(null,null);
                }
            });

        }
    };

}, '0.0.1', {requires: ['mojito','mojito-rest-lib', 'json-parse','cookie']});
