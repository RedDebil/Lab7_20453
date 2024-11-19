// src/UserCard.js
import React, { useState, useReducer, useEffect, useRef } from 'react';

const initialState = [];

function todoReducer(state, action) {
  switch (action.type) {
    case 'add':
      return [...state, { text: action.payload, completed: false }];
    case 'toggle':
      return state.map((todo, index) =>
        index === action.index ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
}

function UserCard({ name, age, address }) {
  const [count, setCount] = useState(0);
  const [todos, dispatch] = useReducer(todoReducer, initialState); 
  const [seconds, setSeconds] = useState(0);
  const inputRef = useRef(null);

  const [input, setInput] = useState('');

  // useEffect - Timer liczący czas spędzony na karcie
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Dodanie zadania
  const handleAddTask = () => {
    dispatch({ type: 'add', payload: input });
    setInput('');
    inputRef.current.focus();
  };

  return (
    <div style={{
      border: '1px solid #ccc',
      padding: '16px',
      borderRadius: '8px',
      maxWidth: '250px',
      margin: '8px'
    }} onClick={() => setCount(count + 1)}>
      <h2>{name}</h2>
      <p>Wiek: {age}</p>
      <p>Adres: {address}</p>
      <p>Liczba kliknięć: {count}</p>
      <p>Czas na karcie: {seconds} sekund</p>
      
      <h3>Lista zadań</h3>
      <input
        ref={inputRef}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Dodaj nowe zadanie"
      />
      <button onClick={handleAddTask}>Dodaj</button>
      <ul>
        {todos.map((todo, index) => (
          <li
            key={index}
            onClick={() => dispatch({ type: 'toggle', index })}
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserCard;
