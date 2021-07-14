import React from 'react';
import PageTitle from './page-title';
import TodoList from './todo-list';
import TodoForm from './todo-form';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  componentDidMount() {
    fetch('/api/todos')
      .then(response => response.json())
      .then(data => {
        this.setState({ todos: data });
      })
      .catch(err => console.error('Error:', err));
  }

  addTodo(newTodo) {
    const data = newTodo;

    fetch('api/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => {
        const currentArray = this.state.todos;
        const newArray = [data];
        const finalArray = currentArray.concat(newArray);
        this.setState({ todos: finalArray });
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  toggleCompleted(todoId) {
    // use Array.prototype.find since ids and indexes normally do not line up
    const data = this.state.todos.find(todoList => todoList.todoId === todoId);
    data.isCompleted = !data.isCompleted;

    fetch(`/api/todos/${todoId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => {
        // use map to copy state.todos array and prevent mutating state.todos array
        const newData = this.state.todos.map(todo => todo);
        newData.find(todoList => todoList.todoId === todoId).isCompleted = data.isCompleted;
        this.setState({ todos: newData });
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col pt-5">
            <PageTitle text="Todo App"/>
            <TodoForm onSubmit={this.addTodo}/>
            <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted}/>
          </div>
        </div>
      </div>
    );
  }
}
