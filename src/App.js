import './App.css';
/* import Navbar from './components/Navbar'; */
import Content from './components/Content';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Index from "./components/Index";
import WhatWeDo from "./components/WhatWeDo";
import Maintainable from "./components/Maintainable";
import GetInTouch from "./components/GetInTouch";



const App = () => {

  return (

    <Router>
      
     {/*  <Navbar /> */}

        <Switch>

          <Route exact path='/' component={Index} />
          <Route exact path='/about' component={WhatWeDo} />
          <Route exact path='/maintainable' component={Maintainable} />
          <Route exact path='/contact' component={GetInTouch} />

        </Switch>

      

    </Router>
  );
}

export default App;
