import React from "react";

class List extends React.Component {
  render() {
    return (
      <ul>
        {this.props.todos.map((todo, index) => {
          return (
            <li key={index}>
              {todo.title},{todo.deadline},{todo.isCompleted.toString()}
              <button onClick={() => this.props.editTodo(index)}>EDIT</button>
              <button onClick={() => this.props.deleteTodo(index)}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}
export default List;
