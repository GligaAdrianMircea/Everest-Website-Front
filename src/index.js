import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthContextProvider } from './Context/AuthContext';
import { Provider } from 'react-redux';
import store from './Redux.js/reduxFunctionalities'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <Provider store={store}>
      <App />
      </Provider>
    </AuthContextProvider>
  </React.StrictMode>
);