/*
 * Copyright (c) 2011 Yahoo! Inc. All rights reserved.
 */

YUI.add('NotepadModel-tests', function(Y) {
    
    var suite = new YUITest.TestSuite('NotepadModel-tests'),
        model = null,
        A = YUITest.Assert;
    
    suite.add(new YUITest.TestCase({
        
        name: 'Notepad model user tests',
        
        setUp: function() {
            model = Y.mojito.models.NotepadModelFoo;
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
    
}, '0.0.1', {requires: ['mojito-test', 'NotepadModelFoo']});
