YUI.add('gmap', function(Y) {
    var gmap = {};

    gmap.init = function() {

        //this.loadScript('https://maps.googleapis.com/maps/api/js?sensor=false','head');
        var myOptions = {
          zoom: 8,
          center: new google.maps.LatLng(-34.397, 150.644),
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(document.getElementById('map_canvas'),myOptions);
        //google.maps.event.addDomListener(window, 'load', initialize);        
    };

    //pos is 'body' or 'head'
    gmap.loadScript = function (jsname,pos) {
        var th = document.getElementsByTagName(pos)[0];
        alert(th);
        var s = document.createElement('script');
        s.setAttribute('type','text/javascript');
        s.setAttribute('src',jsname);
        th.appendChild(s);
    };

    //functions that will autorun
    //gmap.init();
    Y.gmap = gmap;
}, '0.0.1', {requires: []});
