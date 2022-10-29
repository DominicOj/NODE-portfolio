// declare variables
const http = require('http');
const path = require('path')
const fs = require('fs');

// create server
const server = http.createServer((request, response) => {
  if (request.url === '/home.html') {
    let filePath = path.join(__dirname, 'home.html')
    fs.readFile(filePath, 'utf8', (err, data) => {
      response.writeHead(200, { 'Content-Type': 'text/html' })
      response.end(data)
    })
  }

  if (request.url === '/about.html') {
    let filePath = path.join(__dirname, 'about.html')
    fs.readFile(filePath, 'utf8', (err, data) => {
      response.writeHead(200, { 'Content-Type': 'text/html' })
      response.end(data)
    })
  }
  if (request.url === '/contacts.html') {
    let filePath = path.join(__dirname, 'contacts.html')
    fs.readFile(filePath, 'utf8', (err, data) => {
      response.writeHead(200, { 'Content-Type': 'text/html' })
      response.end(data)
    })
  }
})


const port = 5000
server.listen(port, () => {
  console.log('Server is running on ${port}')
})














//   //Open a file on the server and return its content:
//   path.join
//   fs.readFile('home.html', function(err, data) {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.write(data);
//     return res.end();
//     if (err) throw err;
//   });
//   fs.readFile('about.html', function(err, data) {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.write(data);
//     return res.end();
//     if (err) throw err;
//   });

//   fs.readFile('contacts.html', function(err, data) {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.write(data);
//     return res.end();
//     if (err) throw err;
//   });
// }).listen(5000);

// console.log("port is working")



