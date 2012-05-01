/*
 * Copyright (c) 2012 Yahoo! Inc. All rights reserved.
 */
/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('geocodeModelFoo', function(Y, NAME) {

/**
 * The geocodeModelFoo module.
 *
 * @module geocode
 */

    /**
     * Constructor for the geocodeModelFoo class.
     *
     * @class geocodeModelFoo
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
         //http://maps.googleapis.com/maps/api/geocode/json?address=Winnetka&sensor=false
         //http://maps.googleapis.com/maps/api/geocode/json?latlng=37.3640182,-122.0254105&sensor=false
        getAddress: function(lat,lon,callback) {
            callback(null,'address is ');
        }

    };

}, '0.0.1', {requires: []});
