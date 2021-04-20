import '../../App.css';
import Navbar from '../Navbar';


import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Home from "./Home";
import WhatWeDo from "./WhatWeDo";
import Maintainable from "./Maintainable";
import GetInTouch from "./GetInTouch";



const MobileView = () => {

    return (


        <Router>

            <Navbar />

            <Switch>


                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={WhatWeDo} />
                <Route exact path='/maintainable' component={Maintainable} />
                <Route exact path='/contact' component={GetInTouch} />

            </Switch>



        </Router>
    );
}

export default MobileView;
