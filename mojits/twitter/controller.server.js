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

            if(!ac.params.getFromRoute('defer')){
                var loaderImg1 = 'http://a.l.yimg.com/a/i/us/sch/mob/spinner-white-small.gif';
                var loaderImg2 = 'http://a.l.yimg.com/a/i/us/sch/mob/spinner-1.0.0.gif';
                return  ac.done({'onload':{url:loaderImg2}});
            }
            var lat = ac.cookie.get('currentlat') || '37.4144411';
            var lon = ac.cookie.get('currentlon') ||'-122.0240595';
            var radius = 2; //miles



            var coord = ac.params.getFromRoute('coord');
            if(coord && coord.lat &&coord.lon && coord.radius){
                lat = coord.lat;
                lon = coord.lon;
                radius = coord.radius;
            }


            ac.models.twitterModelFoo.getTweets(lat,lon,radius,function(err, data) {
                if (err) {
                    ac.done({err:{errmsg:'fail'}});
                    return;
                }
                ac.done({success:data,coord:coord});
            });
        }

    };

}, '0.0.1', {requires: ['mojito', 'twitterModelFoo']});
