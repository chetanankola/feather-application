/*
 * Copyright (c) 2012 Yahoo! Inc. All rights reserved.
 */
/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('twitter', function(Y, NAME) {

/**
 * The twitter module.
 *
 * @module twitter
 */

    /**
     * Constructor for the Controller class.
     *
     * @class Controller
     * @constructor
     */
    Y.mojito.controllers[NAME] = {

        init: function(config) {
            this.config = config;
        },

        /**
         * Method corresponding to the 'index' action.
         *
         * @param ac {Object} The ActionContext that provides access
         *        to the Mojito API.
         */
        index: function(ac) {
            ac.assets.addCss('./index.css', 'top');
            var lat = '37.4144411';
            var lon = '-122.0240595';
            var coord = ac.params.getFromRoute('coord');
            if(coord){
                lat = coord.lat;
                lon = coord.lon;
            }
/*
{
  "completed_in": 0.097,
  "max_id": 192390629014257660,
  "max_id_str": "192390629014257666",
  "page": 1,
  "query": "",
  "refresh_url": "?since_id=192390629014257666&q=&geocode=22%2C22%2C1mi",
  "results": [],
  "results_per_page": 15,
  "since_id": 0,
  "since_id_str": "0"
}

*/
            ac.models.twitterModelFoo.getTweets(lat,lon,function(err, data) {
                if (err) {
                    ac.done({err:{errmsg:'fail'}});
                    return;
                }
                ac.done({success:data});
            });
        }

    };

}, '0.0.1', {requires: ['mojito', 'twitterModelFoo']});
