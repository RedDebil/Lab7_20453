// src/App.js
import React from 'react';
import { ThemeProvider } from './ThemeContext';
import ThemeSwitcher from './ThemeSwitcher';
import UserCard from './UserCard';

function App() {
  return (
    <ThemeProvider>
      <h1>Autor: Filip Kłos 20453</h1>
      <h2>UseState został użyty do wyliczania ilości kliknięć na pole danych konkretnej osoby</h2>
      <h2>UseReducer został użyty do zarządzania stanu listy</h2>
      <h2>UseEffect został użyty do śledzenia czasu spędzonego na stronie</h2>
      <h2>UseContext został użyty do przełączania motywu na stronce, po wciśnięciu przycisku</h2>
      <h2>UseRef został użyty do skupienia się na polu tekstowym po dodaniu nowego zadania</h2>
      <ThemeSwitcher />
      <div style={{ display: 'flex', gap: '16px' }}>
        <UserCard name="Jan Kowalski" age={28} address="ul. Główna 123, Warszawa" />
        <UserCard name="Anna Nowak" age={34} address="ul. Dębowa 456, Kraków" />
        <UserCard name="Maria Wiśniewska" age={42} address="ul. Leśna 789, Wrocław" />
      </div>
    </ThemeProvider>
  );
}

export default App;
