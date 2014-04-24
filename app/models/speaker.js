var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var SpeakerSchema = new Schema({
  first_name: String,
  last_name: String,
  twitter: String,
  facebook: String,
  linkedin: String,
  github: String,
  created_at: {
    type: String,
    default: Date.now()
  },
  updated_at: {
    type: String,
    default: Date.now()
  }
});

var fullname = SpeakerSchema.virtual('fullname');
fullname.get(function(){
  return this.first_name + ' ' + this.last_name;
});

mongoose.model('Speaker', SpeakerSchema);