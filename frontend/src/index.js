// frontend/src/index.js
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ModalProvider } from "./context/Modal";
import PhotoProvider from "./context/PhotoContext";

import configureStore from "./store";
import { restoreCSRF, csrfFetch } from "./store/csrf";
import * as sessionActions from "./store/session";
import * as innActions from './store/inns';
import * as regionActions from './store/regions'
import * as locationActions from './store/locations'
import * as reservationActions from './store/reservations'

const store = configureStore();

if (process.env.NODE_ENV !== "production") {
  restoreCSRF();

  window.csrfFetch = csrfFetch;
  window.store = store;
  window.sessionActions = sessionActions;
  window.innActions = innActions;
  window.regionActions = regionActions;
  window.locationActions = locationActions;
  window.reservationActions = reservationActions;
}

function Root() {
  return (
    <Provider store={store}>
      <PhotoProvider>
        <ModalProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ModalProvider>
      </PhotoProvider>
    </Provider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);

export default store;
