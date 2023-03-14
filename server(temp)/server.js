// 这是一个使用Node.js编写的WebSocket服务器的代码片段，使用了ws模块。

// 首先，代码导入了ws模块并创建了一个WebSocket服务器实例wss，它监听8080端口。

// 每当新客户端连接到服务器时，都会调用wss.on('connection', ...)函数。回调函数中的ws参数代表与客户端的WebSocket连接。

// 当有新客户端连接到服务器时，代码使用console.log('Client connected')向控制台记录一条消息。

// 当服务器收到来自客户端的消息时，会调用ws.on('message', ...)函数。回调函数中的message参数表示客户端发送的消息。服务器使用console.log('received: %s', message)向控制台记录收到的消息。

// 服务器使用ws.send('Welcome to the WebSocket server!')向客户端发送欢迎消息。

// 当WebSocket连接被客户端关闭时，会调用ws.on('close', ...)函数。服务器使用console.log('Client disconnected')向控制台记录一条消息。

// 这段代码设置了一个基本的WebSocket服务器，可以记录来自客户端的消息并向每个连接的客户端发送欢迎消息。\
const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8000 });

wss.on('connection', function connection(ws) {
  console.log('Client connected');

  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });
  const drawmessage={
    "type":"draw_self",
    "tile":"1s"
  };
  const drawmessage2={
    "type":"draw_self",
    "tile":"2s"
  };
  //当前可选择的选择按钮,action包括了"tiaoguo""chi""hu""gang""zimo"
  const select={
    "type":"action_choose",
    "action":"tiaoguo"
  }

  ws.send(JSON.stringify(drawmessage));
  ws.send(JSON.stringify(drawmessage2));
  ws.send(JSON.stringify(select));
  ws.on('close', function close() {
    console.log('Client disconnected');
  });

});
