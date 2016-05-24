(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.Alarm = function(time) {
  this.time = time;
}

exports.Alarm.prototype.read = function() {
  return this.time;
}

},{}],2:[function(require,module,exports){
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

},{"./../js/alarm.js":1}]},{},[2]);
