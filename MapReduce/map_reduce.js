const fs = require('fs');

const host = process.env.HOST;

function getMapInput(fileName){
    const path = `${host}/${fileName}`;
    return fs.readFileSync(path, 'utf-8');
}

function emitMapResult(key, value){
    const path = `${host}/map_results/${key}.txt`;
    return fs.appendFileSync(path, value + '\n');
}

function getReduceInputs(){
    const fileNames = fs.readdirSync('map_results', 'utf-8');
    const inputs = [];
    for(const fileName of fileNames){
        const key = fileName.split('.')[0];
        const contents = fs.readFileSync(`map_results/${fileName}`, 'utf-8');
        inputs.push([key, contents.split('\n').filter(value => value != '')]);
    }
    return inputs;
}

function emitReduceResult(key, value){
    const path = `reduce_results/results.txt`;
    return fs.appendFileSync(path, key + ' '+ value + '\n');
}


module.exports = {getMapInput, emitMapResult, getReduceInputs, emitReduceResult};