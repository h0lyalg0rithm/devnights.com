
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var EventSchema = new Schema({
  title: String,
  url: String,
  text: String,
  fbid: String,
  meetupid: String,
  eventbriteid: String,
  created_at: {
    type: Date,
    default: Date.now()
  },
  updated_at: {
    type: Date,
    default: Date.now()
  }
});

EventSchema.virtual('date')
  .get(function(){
    return this._id.getTimestamp();
  });
EventSchema.post('save', function(next){
  this.updated_at = new Date();
  if(!this.created_at){
    this.created_at = new Date();
  }
  next();
}).post('update' ,function(next){
  this.updated_at = new Date();
  next();
});


mongoose.model('Event', EventSchema);
