import React from 'react';
import { Todo } from '../../models/Todo';

interface Props {
  todo: Todo;
}

const TodoListIten: React.FC<Props> = ({ todo }: Props) => {
  return (
    <tr className="uk-animation-slide-bottom-medium">
      <td className="uk-width-auto">
        <label>
          <input className="uk-checkbox" type="checkbox" checked={todo.done} />
        </label>
      </td>
      <td className="uk-width-expand">{todo.title}</td>
      <td className="uk-width-auto">
        <button
          className="uk-icon-button uk-button-danger"
          uk-icon="trash"
        ></button>
      </td>
    </tr>
  );
};

export default TodoListIten;
