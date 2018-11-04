const express = require('express');
const port = 8000;
const app = express();
const http = require('http');
const fs = require('fs');
const bodyParser = require('body-parser')
app.use(bodyParser.json());

app.get('/', (req, res, nxt) => {
  res.send('hello')
  console.log("Received the call");
});
app.post('/send', (req, res, nxt) => {
console.log(req.body);

fs.writeFile("/tmp/test", JSON.stringify(req.body), function(err) {
  if(err) {
      return console.log(err);
  }

  console.log("The file was saved!");
}); 

});

const httpServer = http.createServer(app);

httpServer.listen(port, function(){
  console.log('Server Started')
});

// {
//   "gender": "male",
//   "other": "555"
// }