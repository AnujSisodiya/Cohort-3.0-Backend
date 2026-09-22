let http = require('http');

let server = http.createServer((req, res) => {
  console.log('Hello I am server');
  res.end('Ok I have listened you');
});

server.listen(3000, () => {
  console.log('Server is listening on Port 3000');
});
