const http = require('http');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const app = require('./app');

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);
mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then(con => {
    // console.log(con.connections);
    console.log('DB Connection Successful!');
  });

const PORT = process.env.PORT || 9000;

const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
