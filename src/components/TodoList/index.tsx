import React from 'react';
import { Todo } from '../../models/Todo';

const TodoList: React.FC = () => {
  const todos: Todo[] = [
    { id: 1, title: 'ir ao supermercado', done: false },
    { id: 2, title: 'ir para academia', done: false },
    { id: 3, title: 'ir para TGP', done: false },
  ];

  return (
    <div>
      {todos.map((todo, index) => {
        return <h2 key={index}>{todo.title}</h2>;
      })}
    </div>
  );
};

export default TodoList;
