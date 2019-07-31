const net = require('net');
const readlineSync = require('readline-sync');


const conn = net.createConnection({ 
  host: 'localhost', // change to IP address
  port: 3000
});
conn.setEncoding('utf8'); // interpret data as text



conn.on('connect', () => {
  let file = readlineSync.question('What file are you wanting? ');
  
  conn.write(file);
});


conn.on('data', (data) => {
  console.log(data);
  if(data){
    process.exit();
  }
});


