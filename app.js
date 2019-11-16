const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

// To handle unexisting routes (404 response)
app.use(function(req, res, next) {
  res.status(404).send("sorry can't find that!")
});

// To handle errors (500 response)
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
