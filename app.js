const express = require('express');
const app = express();
const port = 3000;

const noises = {'pig': 'Oink', 'cow': 'Moo', 'dog': 'Woof Woof!'}

// route '/' renders 'Hi there, welcome to my assignment!'
app.get('/', (req, res) => res.send('Hi there, welcome to my assignment!'));

// route '/speak/pig' renders "The pig says 'Oink'"
// route '/speak/cow' renders "The cow says 'Moo'"
// route '/speak/dog' renders "The dog says 'Woof Woof!'"
app.get('/speak/:animal', (req, res) => {
  const animal = req.params['animal'];
  res.send(`The ${animal} says '${noises[animal]}'`);
});

// route '/repeat/hello/5' renders 'hello hello hello hello hello'
// route '/repeat/blah/2' renders 'blah blah'
app.get('/repeat/:something/:times', (req, res) => {
  const something = `${req.params['something']} `;
  const times = req.params['times'];
  res.send(`${something.repeat(times-1)}${something.trimEnd()}`)
})

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
