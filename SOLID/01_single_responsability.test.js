const { TodoList, TodoListService } = require('./01_single_responsability')

describe('Single responsability principle', () => {
  
  it('should use two entities for separate of actors', () => {
    const todoList = new TodoList()
    const todoListService = new TodoListService()

    expect(todoList.save).toBeDefined()
    expect(todoList.load).toBeDefined()
    expect(todoListService.save).toBeUndefined()
    expect(todoListService.load).toBeUndefined()
  })

})