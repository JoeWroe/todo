import React, { Component } from 'react';

import AddTodo from './AddTodo'
import Todos from './Todos'

class App extends Component {
  state = {
    todos: [
        { id: 1, content: 'Buy some Milk' },
        { id: 2, content: 'Play some Mario Kart' }
    ]
  }

  addTodo = (todo) => {
      todo.id = Math.random()
      let todos = [...this.state.todos, todo]
      this.setState({ todos })
  }

  deleteTodo = (id) => {
      const todos = this.state.todos.filter(todo => {
          return todo.id !== id
      })

      this.setState({ todos })
  }

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <AddTodo addTodo={ this.addTodo } />
        <Todos todos={ this.state.todos } deleteTodo={ this.deleteTodo } />
      </div>
    );
  }
}

export default App;
