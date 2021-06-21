import React from 'react';
import { TodoItem } from '../Todo.types';

interface TodoListItemProps extends TodoItem {
  id: string;
  complete: (id: string) => void;
}

export const TodoListItem: React.FC<TodoListItemProps> = (props: TodoListItemProps) => {

    const { label, completed, complete, id } = props;

    return (
      <li className="todo">
        <label>
          <input type="checkbox" checked={completed} onChange={() => complete(id)} /> {label}
        </label>
      </li>
    );
  }

