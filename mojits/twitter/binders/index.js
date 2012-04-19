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
        onRefreshView: function(node){
            this.node = node;
            var self = this;
            var tweets_scroll = new Y.ScrollView({
                srcNode:this.node.one('#tweets-scrollable-container'),
                height: "16em"
            });
            setTimeout(function(){
                tweets_scroll.syncUI();
            },1000);
            tweets_scroll.render();
            
            Y.on('resize', function (e) {
                tweets_scroll.syncUI();
            });
        },
        bind: function(node) {
            var me = this;
            this.node = node;
            var self = this;

            var lat = Y.Cookie.get('currentlat') ||'37.4144411';
            var lon = Y.Cookie.get('currentlon') ||'-122.0240595';
            var radius = 2;
            var args = {params: {route: {
                            coord:{lat:lat,lon:lon,radius:radius},defer:true
                        }}};
            this.mojitProxy.refreshView(args);

            Y.on('MAP_UPDATE', function(e, map) {
            var args = {params: {route: {
                            coord:{lat:map.lat,lon:map.lon,radius:map.radius},defer:true
                        }}};
                this.mojitProxy.refreshView(args);
            }, this);


            //this.mojitProxy.refreshView(args);
        }

    };

}, '0.0.1', {requires: ['mojito-client','scrollview','scrollview-base', 'scrollview-paginator']});
