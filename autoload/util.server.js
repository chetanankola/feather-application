YUI.add('util', function(Y) {
    Y.stars = function(rating) {
        var arr = [];
        var r = typeof rating === 'string' ? parseFloat(rating) : 0.0;

        for (var i = 0; i < 5; i++) {
            var str = '-empty';

            if (r >= 1.0) {
                str = '';
            }
            else if (r > 0.0 && r < 1.0) {
                str = '-half';
            }

            r -= 1.0;
            arr.push({value: str});
        }

        return arr;
    };
}, '0.0.1', {
    requires: []
});
