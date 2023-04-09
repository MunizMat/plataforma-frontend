import Menu from './components/Menu';

import { MyRoutes } from './routes/index';
import {  BrowserRouter } from "react-router-dom";



function App() {
  return (
        <BrowserRouter>
          <Menu />
          <MyRoutes />
        </BrowserRouter>
  );
}

export default App;