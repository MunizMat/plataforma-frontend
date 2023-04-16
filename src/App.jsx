import Menu from './components/Menu';
import { PersistGate } from 'redux-persist/integration/react';
import { MyRoutes } from './routes/index';
import {  BrowserRouter } from "react-router-dom";
import * as React from 'react';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
          <ToastContainer pauseOnHover={false} position="top-right" theme="light"  />
          <BrowserRouter>
            <Menu />
            <MyRoutes />
          </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;