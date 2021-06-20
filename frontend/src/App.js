// frontend/src/App.js
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Splash from "./components/Splash/index";
import Footer from "./components/Footer";
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
            <Splash isLoaded={isLoaded} />
            <Splash isLoaded={isLoaded} />
            <Splash isLoaded={isLoaded} />
            <Splash isLoaded={isLoaded} />
        </div>
      )}
      <Footer />
    </div>
  );
}

export default App;
