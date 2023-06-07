import React from 'react';
import TodoItem from './TodoItem';

function TodosList({ todosProps, setTodos, delTodo }) {
  return (
    <ul>
      {todosProps.map((todo) => (
        <TodoItem
          key={todo.id}
          itemProp={todo}
          setTodos={setTodos}
          delTodo={delTodo}
        />
      ))}
    </ul>
  );
}

export default TodosList;
