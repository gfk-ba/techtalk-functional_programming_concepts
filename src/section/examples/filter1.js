var list = [1, 2, 3, 4, 5, 6];
var isEven = function(n) {
    return n % 2 === 0;
};
var evenList = _.filter(list, isEven);
