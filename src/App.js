import React from 'react';
import './App.css';
import Counter from './Counter';
import User from './User';

function App() {
  return (
    <>
      <h1>Custom SSR rending app</h1>
      <Counter />
      <User />
    </>
  );
}

export default App;
