var Alarm = require("./../js/alarm.js").Alarm;

$(document).ready(function update() {
  $('#alarm').submit(function(event) {
    var time = $('#timepicker5').val();
    var newAlarm = new Alarm(time);
    $('#new-alarm').append(newAlarm.read());
    console.log(newAlarm.read());
    event.preventDefault();
  });
  $('#currentTime').text(moment().format('LTS'));
  setInterval(update, 1000);
  $('#timepicker5').timepicker({
      template: false,
      showInputs: false,
      minuteStep: 5
  });
});

exports.Alarm = function(time) {
  this.time = time;
}

exports.Alarm.prototype.read = function() {
  return this.time;
}
