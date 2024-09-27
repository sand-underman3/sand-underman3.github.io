const express = require('express')
const fs = require('fs')

const app = express()
const port = 3000;

app.get('/', (_, res) =>  {
  res.statusCode = 200;
  res.send(JSON.stringify(commandQueue.commandsQueue));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})