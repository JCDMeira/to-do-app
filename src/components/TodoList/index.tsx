import React from 'react';
import TodoConsumer from '../../contexts/TodoContext';
import TodoListIten from '../TodoListIten';

const TodoList: React.FC = () => {
  const { todos } = TodoConsumer();

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
