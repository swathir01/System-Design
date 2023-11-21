1.node server.js

2.TOPIC_ID=stock_prices node subscriber.js

3.TOPIC_ID=stock_prices node subscriber.js

4.TOPIC_ID=news_alerts node subscriber.js

5.
(for i in `seq 1 10000`; do sleep 1; echo New Stock Price; done) | NAME=swathi  TOPIC_ID=stock_prices node publisher.js

6.
(for i in `seq 1 10000`; do sleep 1; echo New Stock Price; done) | NAME=swathi  TOPIC_ID=news_alerts node publisher.js