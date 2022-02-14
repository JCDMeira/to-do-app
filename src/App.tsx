import React from 'react';
import Navbar from './components/Navbar';
import TodoList from './components/TodoList';
import { TodoProvider } from './contexts/TodoContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddTodo from './components/AddTodo';

function App() {
  return (
    <TodoProvider>
      <BrowserRouter>
        <Navbar />
        <br />
        <div className="uk-container">
          <Routes>
            <Route path="/create" element={<AddTodo />} />
            <Route
              path="/"
              element={
                <>
                  <h4>Minha lista de tarefas</h4>
                  <TodoList />
                </>
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </TodoProvider>
  );
}

export default App;
