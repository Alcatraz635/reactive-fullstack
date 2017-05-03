import Rx from 'rxjs'
import search from './search.js'
import {newInput, newSubmit} from './new.js'
import renderTodo from './render.js'

export const initialState = {
  searchInput: '',
  todos: [
    'todo one',
    'todo two',
    'todo three'
  ],
  newTodo:''
}

export const state = Rx.Observable.merge(
  search,
  newInput,
  newSubmit
).scan((state, changeFn) => changeFn(state), initialState)


let prevState = initialState
const todos = document.querySelector('.todo-list_todos'),
      newInputField = document.querySelector('#new'),
      newSubmitButton = document.querySelector('#submit')

state.subscribe((state) => {
  if (state.searchInput !== prevState.searchInput) {
    let filteredTodos = state.searchInput.length > 0 ?
                        state.todos
                             .filter( todo => todo.includes(state.searchInput))
                             .map( todo => renderTodo(todo))
                             .join('')
                        : state.todos
                              .map( todo => renderTodo(todo))
                              .join('')

    todos.innerHTML = filteredTodos
  }

  if(state.newTodo.length === 0){
    newInputField.value = ''
    newSubmitButton.disabled = true
  }else if (state.newTodo.length > 0) {
    newSubmitButton.disabled = false
  }

  if (state.todos.length !== prevState.todos.length) {
    todos.innerHTML = state.todos
                              .map( todo => renderTodo(todo))
                              .join('')
  }

  if(prevState !== state) prevState = state
})
