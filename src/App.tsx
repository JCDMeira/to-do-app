import React from 'react';
import Navbar from './components/Navbar';
import TodoList from './components/TodoList';
import { TodoProvider } from './contexts/TodoContext';

function App() {
  return (
    <TodoProvider>
      <div className="uk-container">
        <Navbar />
        <TodoList />
        <h1>hello world</h1>
      </div>
    </TodoProvider>
  );
}

export default App;
