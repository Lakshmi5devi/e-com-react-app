import logo from './logo.svg';
import './App.css';
// import Home from './Componenets/Home';

import { BrowserRouter } from 'react-router-dom';

//Routing
import RoutingConfig from './Routing/RoutingConfig';
import Menu from './Routing/Menu';


function App() {
  return (
    <div className="App">

      {/* <Home></Home> */}

      <BrowserRouter>
          <Menu></Menu>
          <RoutingConfig></RoutingConfig>
      </BrowserRouter>

    </div> 
  );
}

export default App;
