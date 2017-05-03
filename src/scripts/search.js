import Rx from 'rxjs'

const searchTodosInput = document.querySelector('#search')

const search = Rx.Observable
  .fromEvent(searchTodosInput, 'input')
  .debounceTime(200)
  .map( event => state => Object.assign({}, state, {searchInput: event.target.value}))

export default search
