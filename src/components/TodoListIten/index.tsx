import React from 'react';
import { Todo } from '../../models/Todo';

interface Props {
  todo: Todo;
}

const TodoListIten: React.FC<Props> = ({ todo }: Props) => {
  const handleChange = () => {
    console.log('mudou');
  };

  const handleDelete = (todo: Todo) => {
    console.log(todo);
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
