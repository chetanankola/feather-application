/*
 * Copyright (c) 2011 Yahoo! Inc. All rights reserved.
 */
YUI.add('Notepad', function(Y) {

/**
 * The Notepad module.
 *
 * @module Notepad
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
        index: function(ac) {
        	Y.log('BLAH');
            ac.done();
        }

    };

}, '0.0.1', {requires: ['mojito']});
