const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const Value = require('./models/Value.model');

const {
  mongooseDb
} = require('./db');

const app = express();

// CORS Middleware
app.use(cors());

app.use(bodyParser.json());

// Routes - Homepage
app.get('/', function (req, res) {
  res.send('Hello World!')
});

// Routes - Get All Values
app.get('/values', function (req, res) {
  console.log('Getting all Values');
  Value.find({})
    .exec(function (err, values) {
      if (err) {
        res.send('error has occured')
      } else {
        res.send(values);
      }
    })
});


// Routes - Get One Value
app.get('/values/:id', function (req, res) {
  console.log(`getting value: ${req.params.id}`)
  Value.findOne({
      _id: req.params.id
    })
    .exec(function (err, value) {
      if (err) {
        res.send('error occured');
      } else {
        res.send(value);
      }
    })
});

// Routes - Update Existing Value
// app.put('/values/:id', function (req, res) {
//   Value.findOneAndUpdate({
//     _id: req.params.id
//   }, {
//     $set: {
//       value_demonstrated: [{
//         core_value_demonstrated: req.body.core_value_demonstrated,
//         is_active: req.body.is_active,
//         person_nominated: req.body.person_nominated,
//         person_nominated_by: req.body.person_nominated_by,
//         reason_for_nomination: req.body.reason_for_nomination
//       }]
//     }
//   }, {
//     upsert: true
//   }, function (err, Values) {
//     if (err) {
//       console.log('error occured', err);
//     } else {
//       console.log(Values);
//       res.send(Values)
//     }
//   })
// });

// PORT
const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log(`Listening on port ${port}...`);
});
