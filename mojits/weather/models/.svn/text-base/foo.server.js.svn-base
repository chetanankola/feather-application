/*
 * Copyright (c) 2011 Yahoo! Inc. All rights reserved.
 */
YUI.add('weatherModelFoo', function(Y) {

/**
 * The weatherModelFoo module.
 *
 * @module weather
 */

    /**
     * Constructor for the weatherModelFoo class.
     *
     * @class weatherModelFoo
     * @constructor
     */
    Y.mojito.models.weatherModelFoo = {

        init: function(config) {
            this.config = config;
        },

        /**
         * Method that will be invoked by the mojit controller to obtain data.
         *
         * @param callback {Function} The callback function to call when the
         *        data has been retrieved.
         */
        getData: function(callback) {
            callback({some:'data'});
        },
        
        forecast: function(zip_code,callback) { 
	      var zip = zip_code || "90007"; 
	      var query = "select * from weather.forecast where location=" + zip;
	      Y.YQL (query, function(rawYql) {
	      
			if(rawYql.error) {	
				return callback(rawYql.error,null);
			}
			
			if(undefined == rawYql.query||null == rawYql ||null ==rawYql.query ) {
				return callback("Error",null);
			}
	     
	        // Handle empty response.
	        if (null == rawYql || 0 == rawYql.query.count) {
	          callback (null,[]); 
	        } else {
	          callback(null, {"link": rawYql.query.results});
	        } 
	      });
    	},
    };
    
}, '0.0.1', {requires: ['yql']});

