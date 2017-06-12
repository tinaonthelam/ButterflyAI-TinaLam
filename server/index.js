const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path')

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/dist', express.static(path.join(__dirname, 'dist')));
app.use('/api', require('./api'));

app.listen(3000, function () {
  console.log('listening on port 3000');
});

app.get('*', function (req, res) {
  res.sendFile('index.html', { root: './public'});
});

app.use(function (err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});
