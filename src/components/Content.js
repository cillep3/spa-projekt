import React, { useState, useEffect } from "react";
import WhatWeDo from "./WhatWeDo";
import WhatWeDoMobile from "./WhatWeDoMobile";


// dette er et object som bliver generereret til en funktion
// Vi gør enhederne skalerbar herunder
const windowDims = () => ({
    height: window.innerHeight,
    width: window.innerWidth,
});

const Content = ({ items }) => {


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
    return dimensions.width < breakpoint ? <WhatWeDoMobile items={items} /> : <WhatWeDo items={items} />;
    // HER SLUTTER RESPONSIVE DELEN


}

export default Content;