# RabbitMQ example
RabbitMQ hello-world example project

use nodejs

run on OSX

--

### How to use

1. install RabbitMQ

> brew install rabbitmq


2. add path in .zshrc

> export PATH=$HOME/bin:/usr/local/sbin:$PATH


3. active rabbitmq-server

> rabbit-server


4. install node modules

> npm install


5. run send.js & receive.js

> node send.js
> node  receive.js


--

### Command

- start server

> rabbitmq-server


- stop server

> rabbitmqctl  stop


- queue list

> rabbitmqctl list_queues


- delete queue

> rabbitadmin delete queue name=queuename


--

[RabbitMQ reference](https://www.rabbitmq.com/tutorials/tutorial-one-javascript.html)

--


