/*
 * Copyright (c) 2012 Yahoo! Inc. All rights reserved.
 */
/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('openmapBinderIndex', function(Y, NAME) {

/**
 * The openmapBinderIndex module.
 *
 * @module openmapBinderIndex
 */

    /**
     * Constructor for the openmapBinderIndex class.
     *
     * @class openmapBinderIndex
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
            //this.initializeOviMaps(this);
            this.initializeGoogleMaps(this);
        },
        initializeOviMaps: function(that){
            var map = new ovi.mapsapi.map.Display(that.node.one("#ovi_map"), {
                'zoomLevel': 10, //zoom level for the map
                'center': [52.51, 13.4] //center coordinates
            });
        },
        initializeGoogleMaps:function(that) {
              var map;
              function initializeGoogleMap() {
                var myOptions = {
                  zoom: 8,
                  center: new google.maps.LatLng(36.8813329, -103.6975488),
                  mapTypeId: google.maps.MapTypeId.ROADMAP
                };
                map = new google.maps.Map(that.node.one('#map_canvas'),
                    myOptions);

              }
        }

    };

}, '0.0.1', {requires: ['event-mouseenter', 'mojito-client']});
