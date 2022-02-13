/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useContext } from 'react';
import { Todo } from '../models/Todo';
import { TodoContextType } from './TodoContextType';

const TodoContext = createContext<TodoContextType>({
  todos: [],
  addTodo: () => {},
  removeTodo: () => {},
  toggle: () => {},
});

const TodoProvider: React.FC = ({ children }) => {
  const todos: Todo[] = [
    { id: 1, title: 'ir ao supermercado', done: false },
    { id: 2, title: 'ir para academia', done: false },
    { id: 3, title: 'ir para TGP', done: false },
    { id: 4, title: 'Terminar aulas do balta', done: false },
  ];

  const addTodo = (title: string) => {
    console.log(title);
  };

  const removeTodo = (todo: Todo) => {
    console.log(todo);
  };

  const toggle = (todo: Todo) => {
    console.log(todo);
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, removeTodo, toggle }}>
      {children}
    </TodoContext.Provider>
  );
};

const TodoConsumer = (): TodoContextType => useContext(TodoContext);

export { TodoContext, TodoProvider };

export default TodoConsumer;
