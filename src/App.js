import './App.css';
import Navbar from './components/Navbar';


import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Index from "./components/pages/Index";
import WhatWeDo from "./components/pages/WhatWeDo";
import Maintainable from "./components/pages/Maintainable";
import GetInTouch from "./components/pages/GetInTouch";



const App = () => {

  return (


    <Router>

      <Navbar />

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
