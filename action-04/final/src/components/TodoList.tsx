import React from 'react';
import { TodoListItem } from './TodoListItem';
import { FilterTypes, Todos } from '../Todo.types';

interface TodoListProps {
  complete: (id: string) => void;
  todos: Todos;
  filter: FilterTypes;
}

export const TodoList: React.FC<TodoListProps> = (props: TodoListProps) => {

    const { filter, todos, complete } = props;

    const filteredTodos = Object.keys(todos).filter(id => {
      return filter === 'all' || (filter === 'completed' && todos[id].completed) || (filter === 'active' && !todos[id].completed);
    });

    return (
      <ul className="todos">
        {filteredTodos.map(id => (
          <TodoListItem key={id} id={id} complete={complete} {...todos[id]} />
        ))}
      </ul>
    );
  }
