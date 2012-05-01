/*
 * Copyright (c) 2012 Yahoo! Inc. All rights reserved.
 */
/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('gmapBinderIndex', function(Y, NAME) {

/**
 * The gmapBinderIndex module.
 *
 * @module gmapBinderIndex
 */

    /**
     * Constructor for the gmapBinderIndex class.
     *
     * @class gmapBinderIndex
     * @constructor
     */
    Y.namespace('mojito.binders')[NAME] = {

        /**
         * Binder initialization method, invoked after all binders on the page
         * have been constructed.
         */
        init: function(mojitProxy) {
            this.mojitProxy = mojitProxy;
            Y.applyConfig({lang: 'en-US', groups: { gallery: { base: 'http://yui.yahooapis.com/combo?gallery-2011.05.12-13-26/build/', patterns: {'gallery-': {}}, modules: { "gallery-graphics": { "requires": ["node", "event-custom", "base"], "plugins": { "gallery-graphics-canvas": { "path": "gallery-graphics-canvas/gallery-graphics-canvas.js", "condition": { "test": function(Y) { var canvas = document.createElement("canvas"); return (!document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1") && (canvas && canvas.getContext && canvas.getContext("2d"))); }, "trigger": "gallery-graphics" } }, "gallery-graphics-svg": { "path": "gallery-graphics-svg/gallery-graphics-svg-min.js", "condition": { "test": function(Y) { return (document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1")); }, "trigger": "gallery-graphics" } }, "gallery-graphics-vml": { "path": "gallery-graphics-vml/gallery-graphics-vml-min.js", "condition": { "test": function(Y) { var canvas = document.createElement("canvas"); return (!document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1") && (!canvas || !canvas.getContext || !canvas.getContext("2d"))); }, "trigger": "gallery-graphics" } } } } } }, ymaps: { combine: true, base: '/ajaxapi-4/modules/', comboBase: 'http://l.yimg.com/zz/combo?', root: 'a/lib/map/v4/4.0.0.504/modules/', modules: { 'ymaps-core': { path: 'ymaps-core/ymaps-core-min.js', requires: ['event'] }, 'ymaps-config': { path: 'ymaps-config/ymaps-config-min.js', requires: ['ymaps-core', 'intl'], lang: ['en-US', 'en-GB', 'es-ES', 'es-MX', 'fr-FR', 'fr-CA', 'it-IT', 'de-DE'] }, 'ymaps-util': { path: 'ymaps-util/ymaps-util-min.js', requires: ['ymaps-core', 'ymaps-config', 'datasource', 'node'] }, 'ymaps-coordpoint': { path: 'ymaps-coordpoint/ymaps-coordpoint-min.js' }, 'ymaps-geolocation': { path: 'ymaps-geolocation/ymaps-geolocation-min.js', requires: ['base', 'ymaps-util'] }, 'ymaps-traffic': { path: 'ymaps-traffic/ymaps-traffic-min.js', requires: ['base', 'ymaps-util', 'ymaps-geolocation'] }, 'ymaps-route': { path: 'ymaps-route/ymaps-route-min.js', requires: ['widget', 'ymaps-geolocation','ymaps-util'] }, 'ymaps-controls-zoom' : { path: 'ymaps-controls-zoom/ymaps-controls-zoom-min.js', requires: ['ymaps-util', 'slider', 'event-key'] }, 'ymaps-controls-zoombutton' : { path: 'ymaps-controls-zoombutton/ymaps-controls-zoombutton-min.js', requires: ['ymaps-util', 'plugin','slider'] }, 'ymaps-controls-simplezoom' : { path: 'ymaps-controls-simplezoom/ymaps-controls-simplezoom-min.js', requires: ['ymaps-util', 'widget', 'event-key'] }, 'ymaps-core-projection': { path: 'ymaps-core-projection/ymaps-core-projection-min.js', requires: ['attribute'] }, 'ymaps-polyline': { path: 'ymaps-polyline/ymaps-polyline-min.js', requires: ['dd', 'gallery-graphics', 'ymaps-util', 'ymaps-coordpoint', 'ymaps-geolocation', 'ymaps-error', 'widget'] }, 'ymaps-route-ui': { path: 'ymaps-route-ui/ymaps-route-ui-min.js', requires: ['base', 'ymaps-geolocation', 'ymaps-util', 'widget', 'node', 'ymaps-coordpoint', 'ymaps-polyline', 'ymaps-error', 'ymaps-route'] }, 'ymaps-overlay': { path: 'ymaps-overlay/ymaps-overlay-min.js', requires: ['dd', 'ymaps-util', 'widget', 'node', 'ymaps-coordpoint', 'ymaps-polyline', 'ymaps-error'] }, 'ymaps-overlays-traffic': { path: 'ymaps-overlays-traffic/ymaps-overlays-traffic-min.js', requires: ['ymaps-core-projection', 'ymaps-geolocation', 'node'] }, 'ymaps-marker': { path: 'ymaps-marker/ymaps-marker-min.js', requires: ["substitue", "widget", "widget-position", "widget-stack", "event-mouseenter", "ymaps-util", "ymaps-geolocation", "ymaps-css", "ymaps-error"] }, 'ymaps-core-tilemanager': { path: 'ymaps-core-tilemanager/ymaps-core-tilemanager-min.js', requires: ['intl', 'ymaps-util', 'ymaps-core-projection', 'ymaps-geolocation', 'ymaps-error', 'ymaps-config'] }, 'ymaps-controls-type': { path: 'ymaps-controls-type/ymaps-controls-type-min.js', requires: ['ymaps-util', 'widget', 'stylesheet', 'intl'] }, 'ymaps-controls-traffic': { path: 'ymaps-controls-traffic/ymaps-controls-traffic-min.js', requires: ['ymaps-util', 'widget'] }, 'ymaps-controls-keyboard': { path: 'ymaps-controls-keyboard/ymaps-controls-keyboard-min.js', requires: ['base', 'event-key', 'overlay', "ymaps-css"] }, 'ymaps-controls-copyright': { path: 'ymaps-controls-copyright/ymaps-controls-copyright-min.js', requires: ['widget', "widget-position", 'jsonp', 'ymaps-error'] }, 'ymaps-controls-branding': { path: 'ymaps-controls-branding/ymaps-controls-branding-min.js', requires: ['widget', "widget-position", 'ymaps-error'] }, 'ymaps-controls-scale': { path: 'ymaps-controls-scale/ymaps-controls-scale-min.js', requires: ['widget'] }, 'ymaps-controls-pan': { path: 'ymaps-controls-pan/ymaps-controls-pan-min.js', requires: ['ymaps-util', 'ymaps-geolocation', 'widget'] }, 'ymaps-tilebody-manager': { path: 'ymaps-tilebody-manager/ymaps-tilebody-manager-min.js', requires: ['ymaps-util', 'ymaps-tile', 'base'] }, 'ymaps-css': { path: 'ymaps-css/ymaps-css-min.css', requires: ['cssreset', 'cssfonts'], type: 'css' }, 'ymaps-error': { path: 'ymaps-error/ymaps-error-min.js', requires: ['plugin'] }, 'ymaps-controls-mouse': { path: 'ymaps-controls-mouse/ymaps-controls-mouse-min.js', requires: ['base'] }, 'ymaps': { path: 'ymaps/ymaps-min.js', requires: ['ymaps-core', 'ymaps-config', 'ymaps-util', 'ymaps-geolocation', 'ymaps-traffic', 'ymaps-route', 'ymaps-route-ui', 'ymaps-overlay', 'ymaps-marker', 'ymaps-core-projection', 'ymaps-core-tilemanager', 'ymaps-polyline', 'ymaps-overlays-traffic', 'node', 'base', 'dd-plugin', 'ymaps-controls-scale', 'ymaps-controls-type', 'ymaps-controls-keyboard', 'ymaps-controls-pan', 'ymaps-controls-zoom', 'ymaps-controls-zoombutton', 'ymaps-tilebody-manager', 'ymaps-controls-simplezoom', 'ymaps-css', 'ymaps-error', 'ymaps-controls-copyright', 'ymaps-controls-mouse', 'event-mouseenter', 'event-synthetic', 'ymaps-controls-traffic', 'ymaps-coordpoint', 'ymaps-controls-branding'] } } } } });
           
        },

        /**
         * The binder method, invoked to allow the mojit to attach DOM event
         * handlers.
         *
         * @param node {Node} The DOM node to which this mojit is attached.
         */
        bind: function(node) {
            var lat = parseFloat(this.mojitProxy.config.lat),
                lon = parseFloat(this.mojitProxy.config.lon);


            this.defaultpos = {};
            this.defaultpos.lat = lat;
            this.defaultpos.lon = lon;
            this.node = node;
            var self = this;
            self.navigate();
            //self.renderMap({});//AnywayOnNolocationshareDisabled
        },

        navigate:function() {
            var currentLoc = {};
            var self = this;
            navigator.geolocation.getCurrentPosition(function(pos) {
                    
                    Y.Cookie.set('currentlat', pos.coords.latitude);
                    Y.Cookie.set('currentlon',  pos.coords.longitude);
                    currentLoc.lat = pos.coords.latitude;
                    currentLoc.lon = pos.coords.longitude;
                    return self.renderMap(currentLoc);
            },function(err){
                  return self.renderMap({});
            });


        },

        renderMap:function(currentLoc){

            var self = this;
            var lat = currentLoc.lat || this.defaultpos.lat;
            var lon = currentLoc.lon || this.defaultpos.lon;
            //alert(currentLoc.lat);
            Y.use('ymaps', function(Y) {
                Y.YMaps.init({appid: 'scaffold-map-6131'});
                


                self.geoloc = new Y.YMaps.GeoLocation({lat: lat,lon: lon});
                self.map = new Y.YMaps.Map({boundingBox: Y.one('#map'),center: self.geoloc,controls: true});
                self.mapmark = new Y.YMaps.Marker({geoLocation: self.geoloc,label: 'Tweet',hoverOverMarkerContent: '<p>blahbliblu</p>',
                    detailViewContent: '<p>Come by and see us sometime.</p>'
                });


                self.map.render();
                self.map.after("renderComplete", function(){self.map.draw(self.mapmark);});

                if(self.mojitProxy.config.debug)self.node.one('#latlon').set('innerHTML',lat+','+lon);

             

                  // create geolocation object using an address
                

                
                self.node.one('#address-search').on('click',function(){
                  var address = self.node.one('#address').get('value') || '701 1st Avenue Sunnyvale';
                  myGeo = new Y.YMaps.GeoLocation({
                      query: address
                  });
                  var _lat =[];
                  var _lon=[];
                  var parsedResponse;
                  myGeo.on('geo_end',function(e){
                      Y.log('geoSuccess()');
                        parsedResponse = e.parsedLatLon;
                        for(var i=0;i<parsedResponse.length;i++){
                            _lat[i] = parsedResponse[i].lat;
                            _lon[i] = parsedResponse[i].lon;
                        }
                      if(parsedResponse.length!==0){
                        alert(_lat[0]+','+_lon[0]);
                        Y.fire('MAP_UPDATE', {}, {
                          lat: _lat[0],
                          lon: _lon[0],
                          radius: 2
                        });
                        self.reRenderMap(_lat[0],_lon[0],self);
                        //self.updateMark(_lat[0],_lon[0],self);
                        //self.map._drawTiles();
                        //var newgeoloc = new Y.YMaps.GeoLocation({lat: _lat[0],lon: _lon[0]});
                        //self.map.setZoomAndCenter({boundingBox: Y.one('#map'),center: newgeoloc,controls: true});
                        //self.map.render();
                      }
                  });
                  myGeo.getGeo();
                });

  



                self.map.on('endDrag', function() {
                   //for debugging purpose !!
                    var that = this;

                    var lat = this.get('lat');
                    var lon = this.get('lon');

                    Y.fire('MAP_UPDATE', {}, {
                        lat: lat,
                        lon: lon,
                        radius: 2
                    });
                    self.updateMark(lat,lon,self);
                });
            });
        },
        reRenderMap: function(lat,lon,self){

                //self.geoloc = new Y.YMaps.GeoLocation({lat: lat,lon: lon});
                //self.map = new Y.YMaps.Map({boundingBox: Y.one('#map'),center: self.geoloc,controls: true});
                self.mapmark = new Y.YMaps.Marker({geoLocation: self.geoloc,label: 'Tweet',hoverOverMarkerContent: '<p>blahbliblu</p>',
                    detailViewContent: '<p>Come by and see us sometime.</p>'
                });
                //self.map.render();
                //self.map.after("renderComplete", function(){self.map.draw(self.mapmark);});
                self.updateMap(_lat[0],_lon[0],self);
        },
        updateMark: function(lat,lon,self) {
            if(self.mapmark) {
              self.map.remove(self.mapmark);
            }
            self.geoloc = new Y.YMaps.GeoLocation({
                  lat: lat,
                  lon: lon
              });
             self.mapmark = new Y.YMaps.Marker({
                  geoLocation: self.geoloc,
                  label: 'Tweet',hoverOverMarkerContent: '<p>blahbliblu</p>',
                    detailViewContent: '<p>Come by and see us sometime.</p>'
            });
            self.map.draw(self.mapmark);
            if(self.mojitProxy.config.debug)self.node.one('#latlon').set('innerHTML',lat+','+lon);
        }
    };

}, '0.0.1', {requires: ['event-mouseenter', 'mojito-client','querystring-parse']});
