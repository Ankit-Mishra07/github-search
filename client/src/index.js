import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import {Provider as ReduxProvider} from 'react-redux'
import {store} from '../src/Redux/Store/store'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ReduxProvider store={store}>
    <App />
    </ReduxProvider>
    </BrowserRouter>
  </React.StrictMode>
);


