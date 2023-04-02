import Menu from './components/Menu';
import store, { persistor } from "./store/index";
import { Provider } from "react-redux";
import { MyRoutes } from './routes/index';
import {  BrowserRouter } from "react-router-dom";
import { PersistGate } from 'redux-persist/integration/react';



function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Menu />
          <MyRoutes />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;