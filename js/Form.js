"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Form = /*#__PURE__*/function () {
  function Form(form) {
    _classCallCheck(this, Form);

    this.form = form;
    this.bill = document.querySelector('input[name=bill]');
    this.service = document.querySelector('select[name=service]');
    this.people = document.querySelector('input[name=people]');
  }

  _createClass(Form, [{
    key: "calculate",
    value: function calculate() {
      if (this.validate()) {
        var math = +this.service.value * +this.bill.value / 100;
        math += +this.bill.value;
        math /= +this.people.value;
        return math;
      }
    }
  }, {
    key: "getInput",
    value: function getInput() {
      return {
        "bill": this.bill.value,
        "people": this.people.value,
        "service": this.service.value
      };
    }
  }, {
    key: "validate",
    value: function validate() {
      return this.bill.value && this.people.value && this.service.value;
    }
  }]);

  return Form;
}();

exports["default"] = Form;