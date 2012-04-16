YUI.add('toggle', function(Y) {
    var Plugin = Y.namespace('Plugin');

    function TogglePlugin(config) {
        TogglePlugin.superclass.constructor.apply(this, arguments);
    }

    TogglePlugin.NAME = 'togglePlugin';
    TogglePlugin.NS = 'toggle';

    TogglePlugin.ATTRS = {
    };

    Y.extend(TogglePlugin, Y.Plugin.Base, {
        initializer: function(config) {
            this._node = this.get('host');
            this._node.delegate('click', this._onClick, '.toggle-target', this);
        },
        
        destructor: function() {
            this._node.detach('click', this._onClick);
        },
        
        _onClick: function(e) {
            if (e.target.hasAttribute('data-toggle')) {
                var target = this._node.one('#' + e.target.getAttribute('data-toggle'));

                if (target.getAttribute('data-toggle-min') === '') {
                    target.setAttribute('data-toggle-min', target.get('offsetHeight'));
                }
                
                if (target.get('offsetHeight') != target.getAttribute('data-toggle-min')) {
                    target.setStyle('height', target.getAttribute('data-toggle-min'));
                }
                else {
                    target.setStyle('height', target.one(':first-child').get('offsetHeight'));
                }

                e.halt();
            }

            e.preventDefault();
        }
    });
    
    Plugin.TogglePlugin = TogglePlugin;
}, '0.0.1', {
    requires: ['node-base', 'node-style', 'node-event-delegate', 'event-base', 'plugin']
});
