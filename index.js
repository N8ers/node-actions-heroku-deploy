const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello Nathan! (v1.0)')
})

const niceThings = ['Wow!', 'Great work', 'You did it!', 'Pizza party?!', 'High Five', 'Gold star!', 'Way to be!!'];
const getNiceThing = () => {
  return niceThings[Math.floor(Math.random() * Math.floor(niceThings.length))];
};

app.get('/niceThing', (req, res) => {
  res.send(getNiceThing())
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
