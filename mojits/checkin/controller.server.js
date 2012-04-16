/*
 * Copyright (c) 2012 Yahoo! Inc. All rights reserved.
 */
YUI.add('checkin', function(Y,NAME) {

    Y.mojito.controllers[NAME] = {
        
        init: function(config) {
            this.config = config;
            this._SHOW_ALL_FRIENDS = config._SHOW_ALL_FRIENDS; //boolean
            this.Fb_permissions = "user_location,friends_location,publish_stream,user_status,friends_status";
        },
        index: function(ac) {
            if(!ac.params.getFromRoute('defer')){
                var loaderImg1 = 'http://a.l.yimg.com/a/i/us/sch/mob/spinner-white-small.gif';
                var loaderImg2 = 'http://a.l.yimg.com/a/i/us/sch/mob/spinner-1.0.0.gif';
                return  ac.done({'onload':{url:loaderImg2}});
            }
            var access_token = ac.cookie.get("fb_access_token") ||null;
            var model = ac.models.checkinModelFoo;
            var self = this;
            ac.assets.addCss('./index.css', 'top');
            if(!access_token) { //get the access token!! and then get Friends
                return ac.done({});
            } else {
                return self.getFriends(ac,access_token);
            }
        },
        getFriends:function(ac,fb_access_token){
            var model = ac.models.checkinModelFoo;
            var self = this;
            /**
             * check async parallel on github for documentation: basically every function parallely and not in any order.
            **/
            Y.async.parallel([
                Y.async.apply(model.getFriends,fb_access_token),
                Y.async.apply(model.getMyFbLocation,fb_access_token)
            ], function(err, result){
                if(err){
                    Y.log(err);
                    return ac.done({});
                }else{
                    Y.log(result);
                    var friends = result[0]; //result of first async function//{fl:[{uid:a1232},{},{}]}
                    var location = result[1].location; //result of 2nd asnc function
                    Y.log('blahblu');
                    Y.log(location);
                    if(!location){
                        Y.log('could not find users location');
                        return ac.done({err:{msg:'Need your location on facebook to get your local friends: Please update your location on facebook'}
                                            ,url_editprofile:'http://facebook.com/me/info'});
                    }
                    Y.log('chanky');
                    Y.log(friends);
                    
                    if(self._SHOW_ALL_FRIENDS) {
                            return ac.done({allfriends:friends});
                    }

                    return self.getFriendsByLocation(ac,friends,location);
                }
            });
        },

        /*
        * function doesnt return anything instead populates the view with the list of friends from the given location.
        * @param1 ac: actioncontext
        * @param2 location:{object} : {}
        */
        getFriendsByLocation:function(ac,friends,location){
                var localfriends = this.filterLocalFriends(friends,location);
                if(localfriends){
                    return ac.done({friends:localfriends,location:location});
                } else{
                    return ac.done({err:{msg:'No friends found for the location specified'}
                                    ,url_editprofile:'http://facebook.com/me/info'});
                }
        },

        getAccessToken: function(ac){
            return ac.cookie.get('fb_access_token');
        },

        /**
        * function takes friends (Param1- type:object) and
        * and location:param2 - type object
        * returns back friends belonging to that location
        **/
        filterLocalFriends: function(friends,location) {
            //Filter out local friends
            var localfriends  = [];
            var results = {};
            if(location && location.id){
                    var j=0;
                    var fl = friends.fl;
                    for( i=0;i<fl.length;i++) {
                        if(fl[i].current_location && fl[i].current_location.id==location.id) {
                            localfriends[j] = fl[i];
                            j++;
                        }
                    }
                    results.fl = localfriends;
                    //Y.log(results);
                    return results;
            }else {
                return null;
            }
        },
    };

}, '0.0.1', {requires: ['mojito','mojito-rest-lib','json-parse','async']});
