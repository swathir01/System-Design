#! bin/bash

##Central control plane

#clean up stray files from prev run
rm -f host1/map_results/*.txt
rm -f host2/map_results/*.txt
rm -f map_results/*.txt
rm -f reduce_results/results.txt


#Run map steps on both hosts in parallel
HOST=host1 node map.js & 
HOST=host2 node map.js &

#wait for them to be done
wait

#run the shuffle step
HOSTS=host1,host2 node shuffle.js

#run the reduce step
node reduce.js

#view the final result of mapReduce job
cat reduce_results/results.txt

#to run this script
#bash run.sh