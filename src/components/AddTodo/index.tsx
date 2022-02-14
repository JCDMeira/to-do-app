import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { TodoContextType } from '../../contexts/TodoContextType';

import TodoConsumer from '../../contexts/TodoContext';

const schema = yup.object().shape({
  title: yup.string().required('Tarefa inválida'),
});

// interface AddTodoForm {
//   title: string;
// }

const AddTodo: React.FC = () => {
  const { addTodo } = TodoConsumer();
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => {
    console.log(data);
    addTodo(data.title);
    // e.target.reset();
    window.location.href = '/';
  };

  return (
    <form onSubmit={handleSubmit<TodoContextType>((data) => onSubmit(data))}>
      <h4>Nova tarefa</h4>
      <div className="uk-margin uk-width-1-1">
        <input
          type="text"
          // name="title"
          id="title"
          placeholder="Nova tarefa..."
          className="uk-input"
          {...register('title')}
        />
        <span>
          <small>
            {/* <strong className="uk-text-danger">{errors.title?.message}</strong> */}
          </small>
        </span>
      </div>
      <div className="uk-width-1-1">
        <button type="submit" className="uk-button uk-button-primary">
          Salvar
        </button>
      </div>
    </form>
  );
};

export default AddTodo;
