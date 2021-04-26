import React, { useState, useEffect } from "react";
import './App.css';
import DesktopView from "./components/desktop/Index";
import MobileView from "./components/mobile/Index";


// Her gør jeg enhederne skalerbar
const responsivWindow = () => ({
  height: window.innerHeight,
  width: window.innerWidth,
});

const App = ({ items }) => {


  // Her starter responsivdelen
  const [dimensions, setDimensions] = useState(responsivWindow());

  useEffect(() => {

    const handleResize = () => {
      setDimensions(responsivWindow());
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };

  }, []);

  // Her laver jeg et breakpoint
  const breakpoint = 960;
  return dimensions.width < breakpoint ? <MobileView items={items} /> : <DesktopView items={items} />;
  // HER SLUTTER RESPONSIVE DELEN


}

export default App;