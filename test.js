const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config/database');

const app = express();

// Connect to db
mongoose.connect(config.database, {
    useNewUrlParser: true
  })
  .then(() => console.log(`Connected to database ${config.database}`))
  .catch(err => console.error('Could not connect to MongoDB...', err))

const valuesSchema = new mongoose.Schema({
  id: Number,
  value: String,
  value_demonstrated: [{
    core_value_demonstrated: String,
    is_active: Boolean,
    person_nominated: String,
    person_nominated_by: String,
    reason_for_nomination: String
  }]
});

const Value = mongoose.model('Value', valuesSchema);

async function createValue() {
  const value = new Value({
    value: "customer",
    value_demonstrated: [{
        core_value_demonstrated: "Customer",
        is_active: true,
        person_nominated: "Chris Howells",
        person_nominated_by: "Event Organiser / Promoter",
        reason_for_nomination: "I wanted to personally thank you for all your hard work this week on Upper Streets Gaming event set up. I know this week has been challenging with Body Power and Chelsea but you guys really pulled it off for me, and the client is so happy with everything we have done for them. This client has been a tough nut to crack so pulling everything out the bag and getting this live for Monday has been amazing and will hopefully mean other events for us, as the feedback has been great so far for them, the proof is in the ticket sales next week so will get marketing on to this. To give you some perspective on this if we sell all the tickets available we will earn roughly over £50k and will deliver the new business team around 35,000 tickets."
      },
      {
        core_value_demonstrated: "Customer",
        is_active: true,
        person_nominated: "Chris Howells",
        person_nominated_by: "Jess Nolan",
        reason_for_nomination: "I just wanted to thank you for you all your support over the last few weeks in getting the LTA pages built and ready for on sale. Your hard work, commitment and extreme patience (with not just me but the client) has been amazing. Your willingness to pick up constant changes from the client and improve the site has made my role as account manager a lot easier and has greatly contributed to the client being extremely happy with the work we have done. The time and effort you have put in has not gone unnoticed. The LTA are midway through their contract and with TTF currently pitching for another one of their larger tournaments this is a very critical time for us so the work done will contribute to us securing new business and well as retaining the existing from this particular client."
      },
      {
        core_value_demonstrated: "Customer",
        is_active: true,
        person_nominated: "Chris Howells",
        person_nominated_by: "Matthew Breen, extra note from Ian Smedley",
        reason_for_nomination: "Chris has put in a significant amount of work this week, staying late into the evenings on multiple occasions, working with great humour, attention to detail and a positive and helpful attitude to make sure we get the Insomnia white label ready for next week. His efforts have improved our relationship with the client and made sure we continue to deliver great service. From my perspective your efforts over the past fortnight in particular, across our entire portfolio and a range of customers, go way beyond the normal call of duty, you have embodied all of our values; Teamwork - You're always calm, collected, and approachable willing to help the rest of the team, despite your own workloads. Spirit - your drive to deliver quality results are second to none. Energise - Your energy, fast, accurate work and turnaround is outstanding, staying late, making nimble decisions, all to deliver for the final value - *Customer* - Thanks Chris."
      }
    ]
  });

  const result = await value.save();
  console.log(result);
}

// createValue();

async function getValues() {
  const necValues = await Value.find({
    _id: '5bef417b5580a133cc6c778f'
  }, {
    value_demonstrated: [{

    }]
  });
  console.log(necValues);
}

getValues();

// CORS Middleware
app.use(cors());

// Body Parser Middleware
app.use(bodyParser.json());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Homepage route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Brilliance Awards Values route
app.get('/api/brilliance-values', (req, res) => {

  Value.find((err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      console.log('Some error occoured: ' + JSON.stringify(err))
      //res.send('Some error occoured');
    }
  })

  // res.send(brilliance_values);

});


app.get('/api/brilliance-values/:id', (req, res) => {
  res.send('user ' + req.params.id)

  // const necValue = Value.findOne(v => v._id === parseInt(req.params.id));
  // res.send(necValue);

  // const necValue = Value.findById(_id, (err, value => {
  //   if (!necValue) {
  //     res.status(404).send('The course with the given value ID was not found')
  //   } else {
  //     res.send(necValue);
  //   };
  // }));

});

// PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
