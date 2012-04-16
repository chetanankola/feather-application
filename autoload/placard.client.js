YUI.add('placard', function(Y) {
    function PlacardPlugin(config) {
        PlacardPlugin.superclass.constructor.apply(this, arguments);
    }

    PlacardPlugin.NAME = 'placardPlugin';
    PlacardPlugin.NS = 'placard';

    PlacardPlugin.ATTRS = {
    };

    Y.extend(PlacardPlugin, Y.Plugin.Base, {
        initializer: function(config) {
            this.node = this.get('host');
            this.node.delegate('click', this.onClick, '.placard', this);
        },
        
        destructor: function() {
            this.node.detach('click', this.onClick);
        },
        
        onClick: function(e) {
            var target = e.target;

            if (target.get('tagName') != 'A' && !target.ancestor('a') && (target = (target.ancestor('.placard')))) {
                e.halt();
                var href = target.getAttribute('data-href');
                if (href) {
                    Y.config.win.location = href;
                }
            }
        }
    });
    
    Y.PlacardPlugin = PlacardPlugin;
}, '1.0.0', {
    requires: ['node-base', 'event-base', 'plugin']
});