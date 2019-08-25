const express = require('express');
const path = require("path");

const app = express();

const prerenderToken = 'jyR5ioDeJWRyySu7UntS';

app.use(require('prerender-node').set('prerenderToken', prerenderToken));

app.use(express.static(path.join(__dirname, 'build')));

app.listen(4000, function() {
  console.log(`Application run on port: 4000`);
});