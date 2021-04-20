import React, { useState, useEffect } from "react";
import './App.css';
import DesktopView from "./components/desktop/Index";
import MobileView from "./components/mobile/Index";

// dette er et object som bliver generereret til en funktion
// Vi gør enhederne skalerbar herunder
const windowDims = () => ({
  height: window.innerHeight,
  width: window.innerWidth,
});

const App = ({ items }) => {


  // HER STARTET RESPONSIV DELEN, SOM VI NORMALT LAVER I CSS'en
  const [dimensions, setDimensions] = useState(windowDims());

  useEffect(() => {

    const handleResize = () => {
      setDimensions(windowDims());
      //console.log(windowDims());
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };

  }, []);

  // Her laver vi et breakpoint, så vi ved hvornår vi vil returnere DesktopView komponentet, eller MobilView komponentet, og ud fra dette breakpoint laver vi en condition
  // DETTE ER EN FORSIMPLET IF SÆTNING
  const breakpoint = 550;
  return dimensions.width < breakpoint ? <MobileView items={items} /> : <DesktopView items={items} />;
  // HER SLUTTER RESPONSIVE DELEN


}

export default App;