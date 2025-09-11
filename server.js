require('dotenv').config({ path: './config/config.env' });
const express = require('express');
const connectDB = require('./config/db');

connectDB();

const app = express();

// body parser
app.use(express.json());

// routes
app.use('/api/v1/bootcamps', require('./routes/bootcamps'));

const port = process.env.PORT || 5000;

const server = app.listen(port, () =>
  console.log(
    'server running in ',
    process.env.NODE_ENV,
    ' mode and at port ',
    port
  )
);

// handling database connection error
// stop the server if database is not connected
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`);
  server.close(() => process.exit(1));
});
