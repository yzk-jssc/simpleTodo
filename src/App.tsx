import React from 'react';
import './App.css';
import TodoMain from './components/TodoMain';

function App() {
  return (
    <div className='App'>
      <h1 className='todo__title'>Todo App</h1>
      <TodoMain/>
    </div>
  );
}

export default App;
