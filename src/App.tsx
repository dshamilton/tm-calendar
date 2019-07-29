import React from 'react';
import logo from './logo.svg';
import './App.css';
import CalendarUI from "./components/CalendarUI"

const App: React.FC = () => {
  return (
    <div className="App">
      <CalendarUI />
    </div>
  );
}

export default App;
