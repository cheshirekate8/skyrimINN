// frontend/src/App.js
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import * as sessionActions from "./store/session";
import { useHistory } from "react-router";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Search from "./components/Search/index";
import RegionsComponent from "./components/SplashRegions";
import LocationsComponent from "./components/SplashLocations";
import InnsComponent from "./components/SplashInns";
import InnPageComponent from "./components/InnPage";
import InnsFromRegionComponent from "./components/RegionPage";
import InnsFromLocationComponent from "./components/LocationPage";
import MyReservationsComponent from "./components/MyReservations";
import EditUserForm from "./components/EditUserForm";

import { getReservationsFromUserId } from "./store/reservations";




function App() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser())
      .then(() => setIsLoaded(true));
  }, [dispatch]);

  const user = useSelector(state => state.session.user)

  useEffect(() => {
    if (!user) {
      history.push('/')
    }
  }, [history, user])

  useEffect(() => {
    dispatch(getReservationsFromUserId(user?.id));
  }, [dispatch, user])

  return (
    <div>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && !user ? (
        <div>
          <Switch>
            <Route path='/' exact>
              <RegionsComponent isLoaded={isLoaded} />
              <LocationsComponent isLoaded={isLoaded} />
              <InnsComponent isLoaded={isLoaded} />
            </Route>
            <Route path='/inns/:id'>
              <InnPageComponent isLoaded={isLoaded} />
            </Route>
            <Route path='/region/:id'>
              <InnsFromRegionComponent isLoaded={isLoaded} />
            </Route>
            <Route path='/locations/:id'>
              <InnsFromLocationComponent isLoaded={isLoaded} />
            </Route>
          </Switch>
        </div>
      ) : (
        //IF HOST, MY HOST BOOKINGS
        <Switch>
          <Route path='/' exact>
            <MyReservationsComponent isLoaded={isLoaded} />
            <InnsComponent isLoaded={isLoaded} />
          </Route>
          <Route path='/user/edit/:id'>
            <EditUserForm />
          </Route>
          <Route path='/inns/:id'>
            <InnPageComponent isLoaded={isLoaded} />
          </Route>
          <Route path='/region/:id'>
            <InnsFromRegionComponent isLoaded={isLoaded} />
          </Route>
          <Route path='/locations/:id'>
            <InnsFromLocationComponent isLoaded={isLoaded} />
          </Route>
        </Switch>
      )}
      <Footer isLoaded={isLoaded} />
      <div className='footerHider'></div>
    </div>
  );
}

//CHANGE NULL TO LOGGED IN USER PAGE

export default App;
