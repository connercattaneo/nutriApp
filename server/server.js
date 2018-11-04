const express = require('express');
const port = 8000;
const app = express();
const https = require('https');
const http = require('http');
const fs = require('fs');

const privateKey  = fs.readFileSync('./../certs/selfsigned.key', 'utf8');
const certificate = fs.readFileSync('./../certs/selfsigned.crt', 'utf8');
const credentials = {key: privateKey, cert: certificate};

app.get('/', (req, res, nxt) => {
  res.send('hello')
  console.log("Received the call")
});

const httpsServer = https.createServer(credentials, app);
const httpServer = http.createServer(app);


httpServer.listen(port, function(){
  console.log('Server Started')
});

httpsServer.listen(8443, function(){
  console.log('Server Started')
});
