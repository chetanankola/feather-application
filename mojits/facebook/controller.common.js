/*
 * Copyright (c) 2012 Yahoo! Inc. All rights reserved.
 */
YUI.add('facebook', function(Y,NAME) {

/**
 * The facebook module.
 *
 * @module facebook
 */

    /**
     * Constructor for the Controller class.
     *
     * @class Controller
     * @constructor
     */
     Y.mojito.controllers[NAME] = {

        init: function(config) {
            this.Appdomain = config.Appdomain;
            this.Appid = config.Appid;
            this.Appsecret = config.Appsecret;
            this.Fb_permissions = "user_location,friends_location,publish_stream,user_status,friends_status";
        },
        index: function(ac) {
            
            ac.done({msg:'this is a lazy loaded mojit'});
            /*var access_token = ac.cookie.get('fb_access_token');
            var facebook_graph_host= "https://graph.facebook.com/me?";
            var graph_fb_url = facebook_graph_host + access_token;// + '&fn={callback}';
            var self = this;

            //Y.mojito.lib.REST.GET(graph_fb_url, {}, {}, handler);
            Y.jsonp(graph_fb_url,{
                on:{
                    success:self.handleSuccess,
                    failure:self.handleError
                },
                args:[ac]
            });
            */
        }/*,
        handleSuccess:function(res,ac) {
            Y.log(res);
            //Y.log(msg);
            if(res.error){
                Y.log('Failure for facebook request');
                Y.log('ERROR:'+res.error.message);
                return ac.done({err:'No facebook auth token'});
            }
            if(res){
                Y.log('Facebook success for facebook request');
                return ac.done({data:res});
            }
           return ac.done({});
        },

        handleError: function(err,ac){
            return ac.done({});
        }*/
    };

}, '0.0.1', {requires: ['mojito','mojito-rest-lib', 'json-parse','jsonp', 'jsonp-url']});
