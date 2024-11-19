import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function ThemeSwitcher() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <div style={{
      background: darkMode ? '#333' : '#fff',
      color: darkMode ? '#fff' : '#000',
      padding: '16px'
    }}>
      <p>Motyw: {darkMode ? 'Ciemny' : 'Jasny'}</p>
      <button onClick={() => setDarkMode(!darkMode)}>
        Przełącz motyw
      </button>
    </div>
  );
}

export default ThemeSwitcher;