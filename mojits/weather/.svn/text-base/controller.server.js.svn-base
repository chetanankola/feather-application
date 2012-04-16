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
       			ac.done({title: 'Meh! Whay!! BLeh!!'}); 
        },
        
        getWeather: function(ac) {
        	//var zipcode = get_randomzipcode();
        	var zipcode = 0;
        	if(ac.params.getFromRoute('zip')!=undefined) {
        		zipcode = ac.params.getFromRoute('zip');
        		console.log('Received param zip from getWeather.js binder...:'+zipcode);
        	}
        	
        	if(zipcode==0) {
        		ac.done({});
        	}
        	var model = ac.models.weatherModelFoo;
        	
	       	model.forecast(zipcode, function(err,data) { 	
	       		console.log("zipcode:"+zipcode);
	       		if(err) {
	       			ac.done({result:"error in processing weather information for"+zipcode});
	       			return;
	       		}
        		noerror = false; 		
        		result= data.link;
        		if(result.channel.item.condition==undefined){
					noerror = false;       		
        		}else {
        			noerror = true;
        		}
        		ac.done({result:result, zipcode:zipcode, noerror:noerror},'json');
        	});
        },
        
        showmeweather: function(ac) {
        	
        	var zipcode = ac.params.getFromRoute('zip') ||get_randomzipcode() || 90007;
        	
        	console.log("zipcode="+zipcode);
        	var model = ac.models.weatherModelFoo;
	       	model.forecast(zipcode, function(err,data) {
	       		console.log("zipcode:"+zipcode);
	       		console.log(err+'===========================================');
	       		if(err) {
	       			ac.done({result:"error in processing weather information for"+zipcode});
	       			return;
	       		}
        		noerror = false; 		
        		result= data.link;
        		if(result.channel.item.condition==undefined){
					noerror = false;       		
        		}else {
        			noerror = true;
        		}
        		ac.done({result:result, zipcode:zipcode, noerror:noerror});
        	});
        },
    };
    /**  
     * All regular functions go here 
     */
    function get_randomzipcode(){
      var zip = (89000+ Math.floor(Math.random()*10000)+ Math.floor(Math.random()*1000)+Math.floor(Math.random()*100)+Math.floor(Math.random()*10));
      return zip;
    }

}, '0.0.1', {requires: ['mojito']});
