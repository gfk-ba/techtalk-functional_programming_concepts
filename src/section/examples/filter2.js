var list = [1, 2, 3, 4, 5, 6];
var isIndexEven = function(n, i) {
    return i % 2 === 0;
};
var output = _.filter(list, isIndexEven);
