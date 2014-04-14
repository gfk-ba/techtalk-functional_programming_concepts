var keys = ['uno', 'due', 'tre'];
var iterator = function(k) {
    var o = {};
    o[k] = 1;
    return o;
};
var objs = _.map(keys, iterator);
// objs === [{uno: 1}, {due: 1}, {tre: 1}]
