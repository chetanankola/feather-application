/*
 * Copyright (c) 2012 Yahoo! Inc. All rights reserved.
 */
YUI.add('loginBinderIndex', function(Y, NAME) {

/**
 * The loginBinderIndex module.
 *
 * @module loginBinderIndex
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
            this.mojitProxy = mojitProxy;
        },

        /**
         * The binder method, invoked to allow the mojit to attach DOM event
         * handlers.
         *
         * @param node {Node} The DOM node to which this mojit is attached.
         */
        bind: function(node) {
            this.node = node;
            var loginlink = node.one('#fblogin');
            var self = this;
            if(loginlink){
                loginlink.on('click',function(e){
                    //e.preventDefault();
                    var loginbutton=node.one('.login-button');
                    loginbutton.replaceClass('login-button','login-button-on-click');
                });
            }

            var logout = this.node.one('#logout');
            if(logout){
                logout.on('click',function(e){
                    Y.Cookie.remove('fb_access_token'); 
                });  
            }   
            //splash user is logged in message only if its the first time.. 
            function pullupSplashedStatus() {
                  var userLoginStatus = node.one('.user-login-status');
                  if(userLoginStatus){
                    userLoginStatus.transition({
                        easing: 'bounceIn',
                        height:'0px'
                    }, function() {
                        this.hide();
                    });
                  }
            }
            setTimeout(pullupSplashedStatus, 3000);
        }

    };

}, '0.0.1', {requires: ['mojito-client','anim','transition','cookie']});
