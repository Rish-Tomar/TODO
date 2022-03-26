const mongoose = require('mongoose')


//connect to database
mongoose.connect('mongodb://localhost/Todo')

//aquire the connection
const db = mongoose.connection;

//if any error , error handler
db.on('error', console.error.bind(console, 'connection error:'));


//connection up and running 
db.once('open', function() {
    // we're connected!

    console.log("successfully connected ")
  });