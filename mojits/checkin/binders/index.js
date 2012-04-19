/*
 * Copyright (c) 2012 Yahoo! Inc. All rights reserved.
 */
YUI.add('checkinBinderIndex', function(Y, NAME) {

/**
 * The checkinBinderIndex module.
 *
 * @module checkinBinderIndex
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
            this.mojitProxy = mojitProxy;
        },
        /**
         *  onRefreshview: is the callback function triggered when RefreshView is called.
         *  @param1: Dom element. representing the new View returned by controller for this mojit
         **/
        onRefreshView: function(node){
            this.node = node;
            var self = this;
            node.one('#refresh').on('click',function(){
                var args = {params: {route: {
                    defer:true
                }}};
                self.mojitProxy.refreshView(args);
            });

            var scrollview_bookmarked_friends = new Y.ScrollView({
                srcNode:this.node.one('#bookmarked-friends-scrollable-container'),
                deceleration: 0.9,
                bounce:0.1,
                flick: {
                    minDistance:10,
                    minVelocity:0.1,
                    axis: "x"
                }
            });
            setTimeout(function(){
                scrollview_bookmarked_friends.syncUI();
            },1000);
            scrollview_bookmarked_friends.render();
            Y.on('resize', function (e) {
                scrollview_bookmarked_friends.syncUI();
            });
        },
        /**
         * The binder method, invoked to allow the mojit to attach DOM event
         * handlers.
         *
         * @param node {Node} The DOM node to which this mojit is attached.
         */
        bind: function(node) {
            this.node = node;
            var self = this;
            var args = {params: {route: {
                    defer:true
            }}};
            this.mojitProxy.refreshView(args);

        }

    };

}, '0.0.1', {requires: ['mojito-client','node','scrollview','scrollview-base', 'scrollview-paginator']});
