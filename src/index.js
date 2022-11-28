import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
// import store from './store/reducer';
// import reportWebVitals from './reportWebVitals';
// import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <Provider store={store}>
      <App />
    </Provider> */}
  </React.StrictMode>,
);

// reportWebVitals();
