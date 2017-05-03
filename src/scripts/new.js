import Rx from 'rxjs'

const newTodoInput = document.querySelector('#new'),
      newTodoSubmit = document.querySelector('#submit')


export const newInput = Rx.Observable
  .fromEvent(newTodoInput, 'input')
  .debounceTime(200)
  .map( event => state => Object.assign({}, state, {newTodo: event.target.value}))

export const newSubmit = Rx.Observable
  .fromEvent(newTodoSubmit, 'click')
  .throttleTime(1000)
  .map( () => state => {
    if(newTodoInput.value.length > 0){
      return Object.assign({}, state, {todos: state.todos.concat(state.newTodo), newTodo: ''})
    }
  })
