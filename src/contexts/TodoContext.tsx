/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext } from 'react';
import { JsxElement } from 'typescript';
import { Todo } from '../models/Todo';
import { TodoContextType } from './TodoContextType';

export const TodoContext = createContext<TodoContextType>({
  todos: [],
  addTodo: () => {},
  removeTodo: () => {},
  toggle: () => {},
});

const TodoProvider = ({ children }: JsxElement) => {
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

export default TodoProvider;
