const express = require('express');
require('dotenv').config({ path: './config/config.env' });
const bootcamps = require('./routes/bootcamps');

const app = express();

app.use('/api/v1/bootcamps', bootcamps);

const port = process.env.PORT || 5000;

app.listen(port, () =>
  console.log(
    'server running in ',
    process.env.NODE_ENV,
    ' mode and at port ',
    port
  )
);
