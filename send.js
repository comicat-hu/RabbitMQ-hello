var amqp = require('amqplib/callback_api');


amqp.connect('amqp://localhost', function(err, conn) {

    conn.createChannel(function(err, ch) {

        var q = 'myqueue';

        var msg = 'hello world 1';

        ch.assertQueue(q, {durable: false});

        // Note: on Node 6 Buffer.from(msg) should be used

        ch.sendToQueue(q, Buffer.from(msg));

        console.log(" [x] Sent %s", msg);
    });

    setTimeout(function() { conn.close(); process.exit(0) }, 500);
});

