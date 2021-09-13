// frontend/src/App.js
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import * as sessionActions from "./store/session";
import { useHistory } from "react-router";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import RegionsComponent from "./components/SplashRegions";
import LocationsComponent from "./components/SplashLocations";
import InnsComponent from "./components/SplashInns";
import InnPageComponent from "./components/InnPage";
import InnsFromRegionComponent from "./components/RegionPage";
import InnsFromLocationComponent from "./components/LocationPage";
import MyReservationsComponent from "./components/MyReservations";
import EditUserForm from "./components/EditUserForm";
import EditReservationForm from "./components/EditReservationForm";
import SignupForm from "./components/SignupForm";
import LoginForm from "./components/LoginForm";
import ReviewForm from "./components/ReviewForm";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser())
      .then(() => setIsLoaded(true));
  }, [dispatch]);

  const user = useSelector(state => state.session.user)


  return (
    <div>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <div>
          <Switch>
            <Route path='/' exact>
              {user ? <Redirect to="/home" /> : null}
              <RegionsComponent isLoaded={isLoaded} />
              <LocationsComponent isLoaded={isLoaded} />
              <InnsComponent isLoaded={isLoaded} />
            </Route>
            <Route path='/home' exact>
              {!user ? <Redirect to="/" /> : null}
              <MyReservationsComponent isLoaded={isLoaded} />
              <InnsComponent isLoaded={isLoaded} />
              <RegionsComponent isLoaded={isLoaded} />
              <LocationsComponent isLoaded={isLoaded} />
            </Route>
            <Route path='/signup'>
              {user ? <Redirect to="/home" /> : null}
              <SignupForm />
            </Route>
            <Route path='/login'>
              {user ? <Redirect to="/home" /> : null}
              <LoginForm />
            </Route>
            <Route path='/inns/:id'>
              <InnPageComponent isLoaded={isLoaded} />
            </Route>
            <Route path='/regions/:id'>
              <InnsFromRegionComponent isLoaded={isLoaded} />
            </Route>
            <Route path='/locations/:id'>
              <InnsFromLocationComponent isLoaded={isLoaded} />
            </Route>
            <Route path='/user/edit/:id'>
              {!user ? <Redirect to="/" /> : null}
              <EditUserForm />
            </Route>
            <Route path='/reservation/edit/:id'>
              <EditReservationForm />
            </Route>
            <Route path='/review/:id'>
              <ReviewForm />
            </Route>
          </Switch>
        </div>
      )}
      <Footer isLoaded={isLoaded} />
      <div className='footerHider'></div>
    </div>
  );
}

//CHANGE NULL TO LOGGED IN USER PAGE


export default App;
