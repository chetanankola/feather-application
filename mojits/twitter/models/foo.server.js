/*
 * Copyright (c) 2012 Yahoo! Inc. All rights reserved.
 */
/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('twitterModelFoo', function(Y, NAME) {

/**
 * The twitterModelFoo module.
 *
 * @module twitter
 */

    /**
     * Constructor for the twitterModelFoo class.
     *
     * @class twitterModelFoo
     * @constructor
     */
    Y.mojito.models[NAME] = {

        init: function(config) {
            this.config = config;
        },

        /**
         * Method that will be invoked by the mojit controller to obtain data.
         *
         * @param callback {function(err,data)} The callback function to call when the
         *        data has been retrieved.
         */
        getData: function(callback) {
            callback(null, { some: 'data' });
        },

        getTweets: function(lat,lon,radius,callback){
            var query= "http://search.twitter.com/search.json?geocode="+lat+","+lon+","+radius+"mi";
            var self = this;
            function handler(err,res) {
                if (err) {
                    return callback(err,null);
                }
                else if(res){
                    var tweets =  Y.JSON.parse(res.getBody());
                    return callback(null,tweets);
                } else {
                    return callback(null,null);
                }
            }

            Y.mojito.lib.REST.GET(query, {}, {}, handler);
        }

    };

}, '0.0.1', {requires: ['mojito','mojito-rest-lib', 'json-parse','cookie']});
