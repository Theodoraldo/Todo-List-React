import React from 'react';
import Header from './Header';
import TodosLogic from './TodosLogic';
import './style/ToDoApp.css';

const TodoApp = () => (
  <div className="container">
    <Header />
    <TodosLogic />
  </div>
);

export default TodoApp;
