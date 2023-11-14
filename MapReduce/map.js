const map_reduce = require('./map_reduce');

function map(text) {
    const lines = text.split('\n');
    for(const line of lines) {
        const latency = parseInt(line);
        if(latency < 10000){
            map_reduce.emitMapResult('under_10_seconds', 1);
        }else {
            map_reduce.emitMapResult('over_10_seconds', 1);
        }
    }
}


const mapInput = map_reduce.getMapInput('latencies.txt');
map(mapInput);