var data = [
    {gender: 'm', age: 31}, {gender: 'f', age: 19},
    {gender: 'f', age: 29}, {gender: 'm', age: 37}
];

var weightedAverage = function(records, weightProp, valueProp, weights) {
    var mapped = _.map(records, function(rec) {
        return {
            weight: weights[weightProp][rec[weightProp]],
            value: rec[valueProp]
        };
    });

    var reduced = _.reduce(mapped, function(total, item) {
        return {
            weight: total.weight + item.weight,
            value: total.value + (item.value * item.weight)
        };
    }, {weight: 0, value: 0});

    return reduced.value / reduced.weight;
};

var output = weightedAverage(data, 'gender', 'age', {gender: {m: 1, f: 2}});
