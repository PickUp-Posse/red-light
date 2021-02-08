'use strict';

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();
const apiRoutes = require('./routes/apiRoutes');

//middleware
const logger = require('./middleware/logger');

app.use(cors);
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(logger);
app.use('/', console.log('routes connected'));
app.use('/student', apiRoutes);



module.exports = {server: app, start: port => {
  if (!port) {throw new Error('There is no port');}
  app.listen(port, () => {
    console.log('Listening on port', port);
  })
}}