import React from 'react';
import { Todo } from '../../models/Todo';

const TodoList: React.FC = () => {
  const todos: Todo[] = [
    { id: 1, title: 'ir ao supermercado', done: false },
    { id: 2, title: 'ir para academia', done: false },
    { id: 3, title: 'ir para TGP', done: false },
  ];

  return (
    <table className="uk-table">
      <caption>Lista de tarefas</caption>
      <thead>
        <tr>
          <th>#</th>
          <th>Tarefa</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {todos?.map((todo, index) => {
          return (
            <tr key={index}>
              <th>{todo.id}</th>
              <th>{todo.title}</th>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TodoList;
