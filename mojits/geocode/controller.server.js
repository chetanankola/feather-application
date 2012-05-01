/*
 * Copyright (c) 2012 Yahoo! Inc. All rights reserved.
 */
/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('geocode', function(Y, NAME) {

/**
 * The geocode module.
 *
 * @module geocode
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
            var lat = '';
            var lon = '';
            ac.models.geocodeModelFoo.getAddress(lat,lon,function(err, data) {
                if (err) {
                    ac.done({error:'model passed error'});
                    return;
                }
                ac.assets.addCss('./index.css');
                ac.done({
                    address:data
                });
            });
        }

    };

}, '0.0.1', {requires: ['mojito', 'geocodeModelFoo']});
