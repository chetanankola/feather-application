/*
 * Copyright (c) 2012 Yahoo! Inc. All rights reserved.
 */

YUI.add('checkinModel-tests', function(Y) {
    
    var suite = new YUITest.TestSuite('checkinModel-tests'),
        model = null,
        A = YUITest.Assert;
    
    suite.add(new YUITest.TestCase({
        
        name: 'checkin model user tests',
        
        setUp: function() {
            model = Y.mojito.models.checkinModelFoo;
        },
        tearDown: function() {
            model = null;
        },
        
        'test mojit model': function() {
            A.isNotNull(model);
            A.isFunction(model.getData);
        }
        
    }));
    
    YUITest.TestRunner.add(suite);
    
}, '0.0.1', {requires: ['mojito-test', 'checkinModelFoo']});
