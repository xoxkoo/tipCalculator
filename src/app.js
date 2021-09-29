import '../sass/base.sass'

import Form from './Form.js'

const input = document.querySelector('input[name=bill]'),
      result = document.querySelector('.result')

const form = new Form(document.querySelector('form'))

document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault()

  const ticket = form.calculate().toFixed(2)

  result.innerHTML = `Your ticket is ${ticket} €`
  
  result.classList.add('animation')
  result.classList.add('an')
})
