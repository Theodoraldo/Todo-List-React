import React, { useState } from 'react';
import './style/TodoItem.css';

const TodoItem = ({ itemProp, setTodos, delTodo, setUpdate }) => {
  const [editing, setEditing] = useState(false);
  const handleChange = (id) => {
    console.log('clicked', id);
    setTodos((prevState) =>
      prevState.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };

  const handleEditing = () => {
    setEditing(true);
  };

  let viewMode = {};
  let editMode = {};
  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      setEditing(false);
    }
  };

  return (
    <>
      <li className="item">
        <div className="content" style={viewMode}>
          <input
            type="checkbox"
            checked={itemProp.completed}
            onChange={() => handleChange(itemProp.id)}
          />
          {itemProp.title}
          <div>
            <button onClick={handleEditing}>Edit</button>
            <button onClick={() => delTodo(itemProp.id)}>Delete</button>
          </div>
        </div>
        <input
          type="text"
          value={itemProp.title}
          className="textInput "
          style={editMode}
          onChange={(e) => setUpdate(e.target.value, itemProp.id)}
          onKeyDown={handleUpdatedDone}
        />
      </li>
    </>
  );
};

export default TodoItem;
