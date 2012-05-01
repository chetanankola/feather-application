/*
 * Copyright (c) 2012 Yahoo! Inc. All rights reserved.
 */

YUI.add('checkin-tests', function(Y,NAME) {

    var suite = new YUITest.TestSuite('checkin-tests'),
        controller = null,
        A = YUITest.Assert;
    
    suite.add(new YUITest.TestCase({
        
        name: 'checkin user tests',
        
        setUp: function() {
            controller = Y.mojito.controllers[NAME];
        },
        tearDown: function() {
            controller = null;
        },
        
        'test mojit': function() {
            var ac, results;
            A.isNotNull(controller);
            A.isFunction(controller.index);
            ac = {
                done: function(data) {
                    results = data;
                }
            };
            Y.log(controller);
            controller.index(ac);
            //A.areSame('', results);

        }
        
    }));
    
    YUITest.TestRunner.add(suite);
    
}, '0.0.1', {requires: ['mojito-test', 'checkin']});
