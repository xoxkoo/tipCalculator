export default class Form {

  constructor (form) {
    this.form = form

    this.bill = document.querySelector('input[name=bill]')
    this.service = document.querySelector('select[name=service]')
    this.people = document.querySelector('input[name=people]')

  }

  calculate() {

    if (this.validate()) {
    
      let math = +this.service.value * +this.bill.value / 100

      math += +this.bill.value  
      math /= +this.people.value

      return math

    }

  }

  getInput() {
    return {
      "bill" : this.bill.value, 
      "people" : this.people.value,
      "service" : this.service.value
    }
  }

  validate() {
     return this.bill.value && this.people.value && this.service.value
  }

}