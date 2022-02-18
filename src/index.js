import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import TopNav from './components/TopNav';
import Card from './components/Card';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <TopNav />
    <Card />
  </React.StrictMode>,
  document.getElementById('root')
);
