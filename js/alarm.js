exports.Alarm = function(time) {
  this.time = time;
}

exports.Alarm.prototype.read = function() {
  return this.time;
}
