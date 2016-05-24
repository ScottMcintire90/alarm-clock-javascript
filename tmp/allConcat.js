var Alarm = require("./../js/alarm.js").Alarm;

var update = function() {
  $('#currentTime').text(moment().format('LTS'));
};

$(document).ready(function() {
  setInterval(update, 1000);
  $('#alarm').submit(function(event) {
    event.preventDefault();

    var time = $('#timepicker5').val();
    var newAlarm = new Alarm(time);

    setInterval(function() {
      $('#hidden-time').text(moment().format('LT'));
      var hidden = moment().format('LT');
      var userAlarm = newAlarm.read();
      if(hidden === userAlarm) {
        console.log("success!");
      }
    }, 1000);

    $('.hide-alarm').show();
    $('#new-alarm').text(newAlarm.read());
  });

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
