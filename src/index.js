import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserProvider } from './userContext';
import { Provider } from 'react-redux';
import store from './redux/Store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <Provider store={store}>
     <UserProvider>
      <App />
    </UserProvider>
    </Provider>
  </React.StrictMode>
);


