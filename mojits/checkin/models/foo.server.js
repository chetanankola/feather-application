/*
 * Copyright (c) 2012 Yahoo! Inc. All rights reserved.
 */
YUI.add('checkinModelFoo', function(Y) {

/**
 * The checkinModelFoo module.
 *
 * @module checkin
 */

    /**
     * Constructor for the checkinModelFoo class.
     *
     * @class checkinModelFoo
     * @constructor
     */
    Y.mojito.models.checkinModelFoo = {

        init: function(config) {
            this.config = config;
        },
        getMyFbLocation: function(access_token,callback) {
            var facebook_graph_host= "https://graph.facebook.com/me?";
            var graph_fb_url = facebook_graph_host + access_token;
            var self = this;
            function handler(err,res) {
                if (err) {
                    return callback(err,null);
                }
                else if(res){
                    var myinfo =  Y.JSON.parse(res.getBody());
                    Y.log(myinfo);
                    var send = {location:myinfo.location};
                    return callback(null,send);
                } else {
                    return callback(null,null);
                }
            }

            Y.mojito.lib.REST.GET(graph_fb_url, {}, {}, handler);

        },

        getFriends: function(access_token,callback) {
            var query = 'https://api.facebook.com/method/fql.query?query=select+uid,name,current_location+from+user+where+uid+in+(select+uid2+from+friend+where+uid1%3Dme())&format=json&'+access_token;
            
            function handler(err,res){
                if(err){
                    Y.log(query+err);
                    return callback(err,null);
                } else if(res) {
                    var fl =  Y.JSON.parse(res.getBody());
                    var results= {};
                    for( i=0;i<fl.length;i++) {
                        var uid = fl[i].uid;
                        fl[i].imageurl = "https://graph.facebook.com/"+uid+"/picture";
                    }
                    results.fl = fl;
                    return callback(null,results);
                }else{
                    return callback(null,null);
                }
            }

            Y.mojito.lib.REST.GET(query, {}, {}, handler);
        }
    };

}, '0.0.1', {requires: ['mojito','mojito-rest-lib', 'json-parse','cookie']});
