/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useContext, useEffect, useState } from 'react';
import { Todo } from '../models/Todo';
import { TodoContextType } from './TodoContextType';
import { get, save } from '../services/TodoService';

const TodoContext = createContext<TodoContextType>({
  todos: [],
  addTodo: () => {},
  removeTodo: () => {},
  toggle: () => {},
});

const TodoProvider: React.FC = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>(get);

  useEffect(() => {
    save(todos);
  }, [todos]);

  const addTodo = (title: string) => {
    const todo: Todo = { id: todos.length + 1, title, done: false };
    setTodos([...todos, todo]);
  };

  const removeTodo = (todo: Todo) => {
    const index = todos.indexOf(todo);
    const result = todos.filter((a, i) => i !== index);
    setTodos(result);
  };

  const toggle = (todo: Todo) => {
    const index = todos.indexOf(todo);
    todos[index].done = !todo.done;
    setTodos([...todos]);
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
