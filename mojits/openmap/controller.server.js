/*
 * Copyright (c) 2012 Yahoo! Inc. All rights reserved.
 */
/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('openmap', function(Y, NAME) {

/**
 * The openmap module.
 *
 * @module openmap
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
            //ac.assets.addBlob('<script type="text/javascript" src="http://maps.googleapis.com/maps/api/js?sensor=false"></script>', 'bottom');
            //ac.assets.addBlob('<script src="http://api.maps.ovi.com/jsl.js" type="text/javascript" charset="utf-8"></script>','bottom');
            ac.done({meh:'meh'});
        }

    };

}, '0.0.1', {requires: ['mojito', 'openmapModelFoo']});
