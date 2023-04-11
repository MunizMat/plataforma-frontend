import Menu from './components/Menu';

import { MyRoutes } from './routes/index';
import {  BrowserRouter } from "react-router-dom";
import * as React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';


function App() {
  return (
    <Provider store={store}>
        <BrowserRouter>
          <Menu />
          <MyRoutes />
        </BrowserRouter>
    </Provider>
  );
}

export default App;