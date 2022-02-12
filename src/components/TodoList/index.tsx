import React from 'react';
import { Todo } from '../../models/Todo';
import TodoListIten from '../TodoListIten';

const TodoList: React.FC = () => {
  const todos: Todo[] = [
    { id: 1, title: 'ir ao supermercado', done: false },
    { id: 2, title: 'ir para academia', done: false },
    { id: 3, title: 'ir para TGP', done: false },
    { id: 4, title: 'Terminar aulas do balta', done: false },
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
          return <TodoListIten key={index} todo={todo} />;
        })}
      </tbody>
    </table>
  );
};

export default TodoList;
