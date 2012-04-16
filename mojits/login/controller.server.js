/*
 * Copyright (c) 2012 Yahoo! Inc. All rights reserved.
 */
YUI.add('login', function(Y) {

/**
 * The login module.
 *
 * @module login
 */

    /**
     * Constructor for the Controller class.
     *
     * @class Controller
     * @constructor
     */
    Y.mojito.controller = {

        /**
         * Method corresponding to the 'index' action.
         *
         * @param ac {Object} The ActionContext that provides access
         *        to the Mojito API.
         */
        init: function(config) {
            this.Appdomain = config.Appdomain;
            this.Appid = config.Appid;
            this.Appsecret = config.Appsecret;
            this.Fb_permissions = "user_location,friends_location,publish_stream,user_status,friends_status";
           
        },
        index: function(ac) {
            var self = this;
            var access_token = ac.cookie.get("fb_access_token");
            var facebookcode = ac.params.getFromUrl('code') || null; //facebook auth code to get token
            ac.assets.addCss('./index.css', 'top');
            this.redirect_uri = this.getRedirectUri(ac);
            if(access_token){
                return self.onAccessTokenFound(ac,access_token);
            }
            if(facebookcode){
                var redirect_uri = this.redirect_uri;
                return this.getToken(ac,facebookcode,redirect_uri,function(err,access_token){
                    if(err){
                        return self.onAccessTokenNotFound(ac,err,facebookcode,redirect_uri);
                    }
                    self.setCookie(ac,access_token);
                    return self.onAccessTokenFound(ac,access_token);
                });
            }
            return self.forceLogin(ac);//this will place a login url
        },
        onAccessTokenNotFound:function(ac,err,facebookcode,redirect_uri){
            Y.log(err);
            Y.log('code:'+facebookcode);
            Y.log('redirect:'+redirect_uri);
            return ac.done({error:{ErrorMsg:'Unable to login:AccessToken not found'}});
        },
        onAccessTokenFound:function(ac,access_token){
                var url_logout = 'https://www.facebook.com/logout.php?'+access_token+'&next='+this.Appdomain;
                return   ac.done({  success:{
                                        SuccessMsg:'user logged in'
                                    },
                                    actions:{
                                        SuccessMsg:'logged in',
                                        url_logout:url_logout,
                                        url_editprofile:'http://facebook.com/me/info'
                                    }
                                });
        },

        setCookie: function(ac,access_token){
                Y.log('Found Access Token Yaaay');
                Y.log(access_token);
                ac.cookie.set('fb_access_token',access_token);
        },
        forceLogin: function(ac){
                Y.log('forcelogin');
                var facebookpermissions = this.Fb_permissions,
                    redirect_uri = this.getRedirectUri(ac),
                    client_id= this.Appid,//"282149431853618",
                    url = "https://www.facebook.com/dialog/oauth?client_id="+client_id+"&redirect_uri="+redirect_uri+"&scope="+facebookpermissions;
                ac.done({Login:{url:url}});
        },
        getRedirectUri: function(ac){
            //var uri = this.Appdomain+"/biz?id="+id+"&step=1";
            var uri = this.Appdomain+"/";//+"/biz?step=1";
            return uri;
        },
        getToken:function(ac,code,redirect_uri,cb){
            ac.models.loginModelFoo.getAccessToken(code,redirect_uri,function(err,res){
                cb(err,res);
            });
        }

    };

}, '0.0.1', {requires: ['mojito','cookie','async']});
