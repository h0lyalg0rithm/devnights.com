// Example model

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var EventSchema = new Schema({
  title: String,
  url: String,
  text: String
});

EventSchema.virtual('date')
  .get(function(){
    return this._id.getTimestamp();
  });

mongoose.model('Event', EventSchema);
