// frontend/src/App.js
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Splash from "./components/Splash/index";
import RegionsComponent from "./components/SplashRegions";
import LocationsComponent from "./components/SplashLocations";



function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);


  return (
    <div>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <div>
            <Splash isLoaded={isLoaded} />
            <RegionsComponent />
            <LocationsComponent/>
            <Splash isLoaded={isLoaded} />
        </div>
      )}
      <Footer />
      <div className='footerHider'></div>
    </div>
  );
}

export default App;
