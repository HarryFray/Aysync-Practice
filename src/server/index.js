const express = require('express');
var cors = require('cors');

const app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello world');
});

const port = 8080;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
