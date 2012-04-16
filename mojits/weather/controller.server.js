/*
 * Copyright (c) 2011 Yahoo! Inc. All rights reserved.
 */
YUI.add('weather', function(Y) {

/**
 * The weather module.
 *
 * @module weather
 */

    /**
     * Constructor for the Controller class.
     *
     * @class Controller
     * @constructor
     */
    Y.mojito.controller = {
		init: function(spec) {
		     this.spec = spec;
		},
        /**
         * Method corresponding to the 'index' action.
         *
         * @param ac {Object} The ActionContext that provides access
         *        to the Mojito API.
         */
        index: function(ac) {
                ac.assets.addCss('./index.css', 'top');
       			ac.done({title: 'Weather Mojit'}); 
        },
        
        getWeather: function(ac) {
        	var zipcode = ac.params.getFromRoute('zip');	
        	if(!zipcode) {
        		return ac.done({});
        	}
        	var model = ac.models.weatherModelFoo;
        	
	       	model.forecast(zipcode, function(err,res) { 	
	       		if(err) {
                    Y.log(err);
	       			return ac.done({result:"error in processing weather information for"+zipcode});
	       		}
                var result = res;
                Y.log(result);	
        		ac.done({result:result, zipcode:zipcode},'json');
        	});
        },
        get_randomzipcode:function(ac){
          var zip = (89000+ Math.floor(Math.random()*10000)+ Math.floor(Math.random()*1000)+Math.floor(Math.random()*100)+Math.floor(Math.random()*10));
          return zip;
        }
    };

}, '0.0.1', {requires: ['mojito','json-parse']});
