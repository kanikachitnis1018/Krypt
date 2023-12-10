import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import { TransactionProvider } from './context/TransactionContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TransactionProvider>
      <App />
    </TransactionProvider>
  </React.StrictMode>,
);
