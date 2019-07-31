const net = require('net');
const fs = require('fs');
const server = net.createServer();

server.listen(3000, () => {
  console.log('Server listening on port 3000!');
});

server.on('connection', (client) => {
  console.log('New client connected!');
  client.setEncoding('utf8');
  client.on('data', (file) => {
    console.log("Requested file:",file);
    if (fs.existsSync(file)) {
    fs.readFile(file, function (err, data) {
     
        client.write(data);
     
    });
  }else{
    client.write("❌ERROR: FILE NOT FOUND");
  }

  });
});
