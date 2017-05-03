import {initialState, state} from './state.js'
import renderTodo from './render.js'

import '../styles/app.scss'

document.addEventListener("DOMContentLoaded", () => {
  const init = (() => {
    const todos = document.querySelector('.todo-list_todos'),
          newSubmitButton = document.querySelector('#submit')

    todos.innerHTML = initialState.todos
                           .map( todo => renderTodo(todo))
                           .join('')
    newSubmitButton.disabled = true
  })()

})
