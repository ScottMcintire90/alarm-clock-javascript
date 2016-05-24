var Alarm = require("./../js/alarm.js").Alarm;

var update = function() {
  $('#currentTime').text(moment().format('LTS'));
};

var counter = 0;

var watch = setInterval(function(){ startWatch() }, 1000);

function startWatch() {
  counter = counter + 1;
  console.log(counter);
  $('#stopwatchValue').text(counter);
}

function resetTheWatch() {
  counter = 0;
}

$(document).ready(function() {
  setInterval(update, 1000);
  $('#stopwatchValue').hide();

  $('#alarm').submit(function(event) {
    event.preventDefault();
    var time = $('#timepicker5').val();
    var newAlarm = new Alarm(time);

    setInterval(function() {
      var hidden = moment().format('LT');
      var userAlarm = newAlarm.read();
      if(hidden === userAlarm) {
        window.location.href = 'rickroll.html';
      }
    }, 1000);
    $('.hide-alarm').show();
    $('#new-alarm').text(newAlarm.read());
  });

  $('#startWatch').submit(function(event) {
    event.preventDefault();
    $('#stopwatchValue').hide().text('');
    clearInterval(watch);
    resetTheWatch();
    watch = setInterval(function(){ startWatch() }, 1000);
    $('#stopwatchValue').show();
  });

  $('#resetWatch').submit(function(event) {
    clearInterval(watch);
    counter = 0;
    console.log(counter);
    $('#stopwatchValue').hide();
    event.preventDefault();
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
