const mongoose = require('mongoose');

async function connect() {
  try {
    await mongoose.connect('mongodb://localhost:27017', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('DATABASE CONNECTED');
  } catch (err) {
    console.log(`DATABASE ERROR! ${err}`);
  }
}
connect();
