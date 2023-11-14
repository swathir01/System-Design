const mapReduce = require('./map_reduce');
const fs = require('fs');

function reduce(key, value){
    const valueCounts = value.length;
    mapReduce.emitReduceResult(key, valueCounts);
}


const reduceInputs = mapReduce.getReduceInputs();
for(const input of reduceInputs){
    reduce(input[0], input[1]);
}