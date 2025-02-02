// Todos.js

import React from 'react';
import TodoItem from './TodoItem';

const Todos = (props) => {
  return (
    <div className='container'>
      <h3>Todos List</h3>
      {props.todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default Todos;
