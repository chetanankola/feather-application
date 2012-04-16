/*
 * Copyright (c) 2011 Yahoo! Inc. All rights reserved.
 */
YUI.add('weatherBinderIndex', function(Y, NAME) {

    Y.namespace('mojito.binders')[NAME] = {

        init: function(mojitProxy) {
            this.mojitProxy = mojitProxy;
        },

        bind: function(node) {
            this.node = node;
            var placeholder = '90007', 
            search_box = node.one('#search_box_id');     
            search_button = node.one('#search_button_id');  

            /** ON KEY UP EVENT when user enters zipcode**/
	        search_box.on('keyup', function() {  
	        	var zipcode = search_box.get('value');
	        	//node.one('#zipcode').set('innerHTML',zipcode);
			    var zip = zipcode || "00"; 
			    var query = "select * from weather.forecast where location=" + zip;
			    if(zip.length!=5) {
			    	node.one('#zipcode').show();
			    	node.one('#zipcode').set('innerHTML','<h3 style="color:red;">zipcode should be 5 digit!!!! </h3>');
			    	node.one('#ajaxify').set('innerHTML','');
			    	return;
			    }else {
			    	node.one('#zipcode').hide();
			    	//node.one('#zipcode').set('innerHTML','<h3 style="color:#666">'+zipcode+'</h3>');
			    	self.node.one('#ajaxify').set('innerHTML','<img src="/static/weather/assets/ajax-loader.gif"></img>');
			    }  
			    self.mojitProxy.invoke('getWeather',{ params: {route:{zip:zip}} },function(err,data) {  	
			    	Y.log(data)
			    	
			    	self.mojitProxy.render ( data , "weatherresults" , function(err,result){
			    		var ajaxify = self.node.one('#ajaxify');   
			    		ajaxify.set('innerHTML',result);
			    	})
				});     		
	        });
	          

	         /** ON search button click when user enters zipcode**/
			var self = this;
			search_button.on('click', function() {
                var zipcode = search_box.get('value');
				var zip = zipcode || "90007";
				self.mojitProxy.invoke('getWeather',{ params: {route:{zip:zip}} },function(err,data) {
					Y.log(data);
					self.mojitProxy.render ( data , "weatherresults" , function(err,result){
						Y.log(result);
						var ajaxify = self.node.one('#ajaxify');
						ajaxify.set('innerHTML',result);
					});
				});
			});
        } //end of "bind:"
    };

}, '0.0.1', {requires: ['mojito-client','yql']});
