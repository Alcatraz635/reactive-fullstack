import renderTodo from '../src/scripts/render.js'

describe('Rendering', () => {

  describe('Render Todo', () => {

    it('Should return an html string of a todo item', () => {
      const expectedTodo = '<li class="todo-list_item">Test my Javascript</li>'
      expect(renderTodo('Test my Javascript')).to.eql(expectedTodo)
    })

  })

})
