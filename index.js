'use strict';

require('dotenv').config();

const mongoose = require('mongoose');
const options = {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true};

mongoose.connect(process.env.MONGOOSE_URI, options);

console.log('INDEX PORT ', process.env.SOCKETPORT);

require('./src/server').start(process.env.PORT);