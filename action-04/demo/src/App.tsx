import React, {useState} from 'react';
import {TodoFooter} from './components/TodoFooter';
import {TodoHeader} from './components/TodoHeader';
import {TodoList} from './components/TodoList';
import {Todos, FilterTypes} from './Todo.types';
import './style.css';

let index = 0;

export const TodoApp = () => {

  const [todos, setTodos] = useState({} as Todos);
  const [filter, setFilter] = useState('all');

  const _addTodo = label => {
    const id = index++;
    setTodos({...todos, [id]: {label, completed: false}});
  };

  const _complete = id => {
    const todo = todos[id];
    const newTodos = {...todos, [id]: {...todo, completed: !todo.completed}};
    setTodos(newTodos);
  };

  const _clear = () => {
    const newTodos = {};

    Object.keys(todos).forEach(id => {
      if (!todos[id].completed) {
        newTodos[id] = todos[id];
      }
    });

    setTodos(newTodos);
  };

  const _setFilter = filter => {
    setFilter(filter);
  };

  return (
    <div>
      <TodoHeader addTodo={_addTodo} setFilter={_setFilter} filter={filter}/>
      <TodoList complete={_complete} todos={todos} filter={filter}/>
      <TodoFooter clear={_clear} todos={todos}/>
    </div>
  );


}
