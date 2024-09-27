const express = require('express')
const fs = require('fs')

const app = express()
const port = 3000;

fs.writeFile('.Misc/commandQueue.json', JSON.stringify(commandQueue.commandsQueue), 'utf8', (err) => {
  
});

app.get('/', (_, res) =>  {
  res.statusCode = 200;
  res.send(JSON.stringify(commandQueue.commandsQueue));
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})