import React from 'react';
import TodoConsumer from '../../contexts/TodoContext';
import { Todo } from '../../models/Todo';

interface Props {
  todo: Todo;
}

const TodoListIten: React.FC<Props> = ({ todo }: Props) => {
  const { removeTodo, toggle } = TodoConsumer();

  const handleChange = () => {
    toggle(todo);
  };

  const handleDelete = (todo: Todo) => {
    removeTodo(todo);
  };

  return (
    <tr className="uk-animation-slide-bottom-medium">
      <td className="uk-width-auto">
        <label>
          <input
            className="uk-checkbox"
            type="checkbox"
            checked={todo.done}
            onChange={handleChange}
          />
        </label>
      </td>
      <td className="uk-width-expand">{todo.title}</td>
      <td className="uk-width-auto">
        <button
          className="uk-icon-button uk-button-danger"
          uk-icon="trash"
          onClick={() => handleDelete(todo)}
        ></button>
      </td>
    </tr>
  );
};

export default TodoListIten;
