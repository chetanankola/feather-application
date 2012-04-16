/*
 * Copyright (c) 2011 Yahoo! Inc. All rights reserved.
 */
YUI.add('showmeweatherBinderIndex', function(Y, NAME) {

    Y.namespace('mojito.binders1')[NAME] = {

        init: function(mojitProxy) {
            this.mp1 = mojitProxy;
            
        },

        bind: function(node) {
            this.node1 = node;  
            alert(1);
            var placeholder = '90007', 
            search_box = node.one('#search_box_id');     
            search_button = node.one('#search_button_id');  
	        //notes.set('value', Y.StorageLite.getItem(keyname) || '');
	        search_box.on('keyup', function() {  
	        	var zipcode = search_box.get('value');
			    var zip = zipcode || "90007"; 
			  /*  var query = "select * from weather.forecast where location=" + zip;
			    if(zip.length!=5) {
			    	node.one('#weatherdiv').set('innerHTML','');
			    	return;
			    }
				Y.YQL (query, function(rawYql) {
					 var finalhtml = '';
				     var link=rawYql.query.results;
				     var temperature = link.channel.item.condition.temp;
				     finalhtml= finalhtml+'<h2>Todays temperature: <b><h3 style="color:#555;">'+temperature+ 'F </h3></b></h2>';
				     var url = link.channel.image.url;
				     finalhtml = finalhtml + '<img src="'+url+'" alt="no img">';
				     var weatherdiv = node.one('#weatherdiv');
					 weatherdiv.set('innerHTML',finalhtml);
					 Y.log(link.channel);
				});	   
				**********/    		
	          });
	          
	          
	        var self = this;
	        search_button.on('click', function() {  
	        	var zipcode = search_box.get('value');
			    var zip = zipcode || "90007"; 
			    alert(zip);
			    self.mp1.invoke('showmeweather',{ params: {route:{zip:zip}} },function() {
			    	
			    });
			    return;      		
	          });
        }
    };

}, '0.0.1', {requires: ['mojito-client','yql']});
