const config = require('../../config/database');
const mongoose = require('mongoose');

mongoose.connect(config.database, {
  useNewUrlParser: true
}, function (err) {
  if (!err) {
    console.log('MongoDB connected successfully...');
  } else {
    console.log('Error in DB connection: ' + JSON.stringify(err));
  }
});

module.exports = mongoose;
