"use strict";

require("../sass/base.sass");

var _Form = _interopRequireDefault(require("./Form.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var input = document.querySelector('input[name=bill]'),
    formular = document.querySelector('form'),
    result = document.querySelector('.result');
var form = new _Form["default"](formular);
formular.addEventListener('submit', function (e) {
  e.preventDefault();
  var ticket = form.calculate().toFixed(2),
      amount = "Your ticket is ".concat(ticket, " \u20AC");
  result.innerHTML = amount;
  result.classList.add('animation');
  result.classList.add('an');
});