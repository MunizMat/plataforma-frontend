import Menu from './components/Menu';

import { MyRoutes } from './routes/index';
import {  BrowserRouter } from "react-router-dom";
import * as React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <Provider store={store}>
          <ToastContainer pauseOnHover={false} position="top-right" theme="light"  />
          <BrowserRouter>
            <Menu />
            <MyRoutes />
          </BrowserRouter>
    </Provider>
  );
}

export default App;