/*
 * Copyright (c) 2012 Yahoo! Inc. All rights reserved.
 */

YUI.add('loginModel-tests', function(Y) {
    
    var suite = new YUITest.TestSuite('loginModel-tests'),
        model = null,
        A = YUITest.Assert;
    
    suite.add(new YUITest.TestCase({
        
        name: 'login model user tests',
        
        setUp: function() {
            model = Y.mojito.models.loginModelFoo;
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
    
}, '0.0.1', {requires: ['mojito-test', 'loginModelFoo']});
