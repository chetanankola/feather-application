/*
 * Copyright (c) 2011 Yahoo! Inc. All rights reserved.
 */
YUI.add('NotepadBinderIndex', function(Y, NAME) {

    Y.namespace('mojito.binders')[NAME] = {
    
        init: function(mojitProxy) {
            this.mojitProxy = mojitProxy;              
        },
        
        bind: function(node) {
          this.node = node;
	      // Based on http://yuilibrary.com/gallery/show/storage-lite
	      var keyname = 'storage-lite-example', notes = node.one('#notes');
	      // Populate the textarea with the stored 
	      // note text on page load.
	      notes.set('value', Y.StorageLite.getItem(keyname) || '');
	      // Save the contents of the textarea after 
	      // each keystroke.
	      notes.on('keyup', function() { Y.StorageLite.setItem(keyname, notes.get('value'));});
        }

    };
}, '0.0.1', {requires: ['mojito-client','gallery-storage-lite']});
