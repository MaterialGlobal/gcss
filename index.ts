const express = require('express');
const app = express();

// External
app.get('/ext/fonts', (req, res) => {
  res.sendFile(__dirname + '/public/external/fonts.min.css');
})

app.get('/ext/sanitize', (req, res) => {
  res.sendFile(__dirname + '/public/external/sanitize.min.css');
})

// Packages

app.get('/pkg/bundle', (req, res) => {
  res.sendFile(__dirname + '/public/packages/bundle.min.css');
})

app.get('/pkg/core', (req, res) => {
  res.sendFile(__dirname + '/public/packages/core.min.css');
})

app.get('/pkg/colors', (req, res) => {
  res.sendFile(__dirname + '/public/packages/colors.min.css');
})

app.get('/pkg/buttons', (req, res) => {
  res.sendFile(__dirname + '/public/packages/buttons.min.css');
})

app.get('/pkg/fonts', (req, res) => {
  res.sendFile(__dirname + '/public/packages/fonts.min.css');
})

app.get('/pkg/tooltips', (req, res) => {
  res.sendFile(__dirname + '/public/packages/tooltips.min.css');
})

// Static files
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
})

app.get('/viewer', (req, res) => {
  res.sendFile(__dirname + '/public/viewer.html');
})

// API
app.get('/api', (req, res) => {
  res.send('cat go meow')
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
