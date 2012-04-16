/*
 * Copyright (c) 2012 Yahoo! Inc. All rights reserved.
 */
YUI.add('facebookBinderIndex', function(Y, NAME) {

/**
 * The facebookBinderIndex module.
 *
 * @module facebookBinderIndex
 */

    /**
     * Constructor for the Binder class.
     *
     * @param mojitProxy {Object} The proxy to allow the binder to interact
     *        with its owning mojit.
     *
     * @class Binder
     * @constructor
     */
    Y.namespace('mojito.binders')[NAME] = {

        /**
         * Binder initialization method, invoked after all binders on the page
         * have been constructed.
         */
        init: function(mojitProxy) {
            var me = this;
            this.mp = mojitProxy;
        },

        /**
         * The binder method, invoked to allow the mojit to attach DOM event
         * handlers.
         *
         * @param node {Node} The DOM node to which this mojit is attached.
         */
        bind: function(node) {
            this.node = node;
            //this.mp.broadcast('lazy-load');
        }

    };

}, '0.0.1', {requires: ['mojito-client','node']});
