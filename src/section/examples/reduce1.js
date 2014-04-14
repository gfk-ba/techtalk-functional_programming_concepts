var list = [1, 2, 3, 4, 5];
var sum = function(imr, n) { return imr + n; };
var summedList = _.reduce(list, sum, 0);
