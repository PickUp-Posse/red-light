'use strict';

require('dotenv').config();

const mongoose = require('mongoose');
const options = { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true };

mongoose.connect(process.env.MONGOOSE_URI, options);


// const server = require('./src/server')

// server.start(process.env.PORT);



