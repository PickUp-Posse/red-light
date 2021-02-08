'use strict';

const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const app = express();

//middleware
const errorHandler = require('../error-handlers/500.js');
const notFound = require('../error-handlers/404.js');
const apiRoutes = require('./routes/apiRoutes.js');
const logger = require('./middleware/logger.js');

//App middleware
app.use(cors());
app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// app.get('/', (req, res) => {
//   console.log('routes connected');
// })
app.use('/student', apiRoutes);

app.use(logger);

//Catchalls
app.use('*', notFound);
app.use(errorHandler);


module.exports = {server: app, start: port => {
  if (!port) {throw new Error('There is no port');}
  app.listen(port, () => {
    console.log('Listening on port', port);
  })
}}