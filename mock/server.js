var WebSocketServer = require('ws').Server;
var wss = new WebSocketServer({
  port: 8888
});

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  })
  for (var i = 0; i < 100; i++) {
    setTimeout(function () {
      ws.send(i)
    }, 1000);
  }
});
