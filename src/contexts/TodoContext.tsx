/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext } from 'react';
import { TodoContextType } from './TodoContextType';

export const TodoContext = createContext<TodoContextType>({
  todos: [],
  addTodo: () => {},
  removeTodo: () => {},
  toggle: () => {},
});
