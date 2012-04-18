/*
 * Copyright (c) 2012 Yahoo! Inc. All rights reserved.
 */
/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('twitterBinderIndex', function(Y, NAME) {

/**
 * The twitterBinderIndex module.
 *
 * @module twitterBinderIndex
 */

    /**
     * Constructor for the twitterBinderIndex class.
     *
     * @class twitterBinderIndex
     * @constructor
     */
    Y.namespace('mojito.binders')[NAME] = {

        /**
         * Binder initialization method, invoked after all binders on the page
         * have been constructed.
         */
        init: function(mojitProxy) {
            this.mojitProxy = mojitProxy;
        },

        /**
         * The binder method, invoked to allow the mojit to attach DOM event
         * handlers.
         *
         * @param node {Node} The DOM node to which this mojit is attached.
         */
        bind: function(node) {
            var me = this;
            this.node = node;
            var self = this;

            Y.on('MAP_UPDATE', function(e, map) {
            var args = {params: {route: {
                            coord:{lat:map.lat,lon:map.lon}
                        }}};
                this.mojitProxy.refreshView(args);
            }, this);


            //this.mojitProxy.refreshView(args);
        }

    };

}, '0.0.1', {requires: ['mojito-client']});
