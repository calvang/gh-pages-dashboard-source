import React from 'react';
import Dashboard from './Dashboard';
import './App.css';

function App() {
  return (
    <>
      <div className="banner">
        <a rel="noopener noreferrer" target="_blank" href="https://calvang.github.io"
          style={{ textDecoration: 'none' }}>
          <h1>
            <i class="fa fa-github"></i> Github pages dashboard
          </h1>
        </a>
      </div>
      <Dashboard />
    </>
  );
}

export default App;
