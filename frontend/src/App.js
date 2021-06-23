// frontend/src/App.js
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Splash from "./components/Splash/index";
import RegionsComponent from "./components/SplashRegions";
import LocationsComponent from "./components/SplashLocations";
import InnsComponent from "./components/SplashInns";
import InnPageComponent from "./components/InnPage";
import InnsFromRegionComponent from "./components/RegionPage";
import InnsFromLocationComponent from "./components/LocationPage";



function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  const user = useSelector(state => state.session.user)

  return (
    <div>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && !user ? (
        <div>
          <Switch>
            <Route path='/' exact>
              <Splash isLoaded={isLoaded} />
              <RegionsComponent isLoaded={isLoaded} />
              <LocationsComponent isLoaded={isLoaded}/>
              <InnsComponent isLoaded={isLoaded}/>
            </Route>
            <Route path='/inns/:id'>
              <InnPageComponent />
            </Route>
            <Route path='/region/:id'>
              <InnsFromRegionComponent />
            </Route>
            <Route path='/locations/:id'>
              <InnsFromLocationComponent />
            </Route>
          </Switch>
        </div>
      ) : null}
      <Footer />
      <div className='footerHider'></div>
    </div>
  );
}

//CHANGE NULL TO LOGGED IN USER PAGE

export default App;
