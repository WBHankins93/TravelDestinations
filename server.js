const express = require('express');
const app = express();

const bodyParser = require('body-parser')
const methodOverride = require('method-override')


app.get('/', (req,res) => {
  res.send('It is Aliveeeeeee');
})


app.listen(3000, () => {
  console.log('App is alive');
})
