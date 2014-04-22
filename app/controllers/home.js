var mongoose = require('mongoose'),
  Event = mongoose.model('Event');

exports.index = function(req, res){
  res.render('home/index', {
    title: 'Devnights'
  });
};