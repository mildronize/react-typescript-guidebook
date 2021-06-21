import React, {useState} from 'react';
import { FilterTypes } from '../Todo.types';

interface TodoHeaderProps {
  addTodo: (label: string) => void;
  setFilter: (filter: FilterTypes) => void;
  filter: FilterTypes;
}

export const  TodoHeader: React.FC<TodoHeaderProps> = (props: TodoHeaderProps) => {
    const [labelInput, setLabelInput] = useState('');

  const _onFilter = evt => {
    props.setFilter(evt.target.innerText);
  };

  const _onChange = evt => {
    setLabelInput(evt.target.value);
  };

  const _onAdd = () => {
    props.addTodo(labelInput);
    setLabelInput('');
  };

    return (
      <header>
        <h1>todos</h1>
        <div className="addTodo">
          <input value={labelInput} onChange={_onChange} className="textfield" placeholder="add todo" />
          <button onClick={_onAdd} className="submit">
            Add
          </button>
        </div>
        <nav className="filter">
          <button onClick={_onFilter} className={props.filter === 'all' ? 'selected' : ''}>
            all
          </button>
          <button onClick={_onFilter} className={props.filter === 'active' ? 'selected' : ''}>
            active
          </button>
          <button onClick={_onFilter} className={props.filter === 'completed' ? 'selected' : ''}>
            completed
          </button>
        </nav>
      </header>
    );
}
