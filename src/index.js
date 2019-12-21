import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// styles for this kit
import "./assets/css/bootstrap.min.css";
//import "./assets/scss/now-ui-kit.scss";
import "./assets/css/now-ui-kit.css";
import "./assets/demo/demo.css";
import "./assets/demo/nucleo-icons-page-styles.css";

import Index from "./views/Index.jsx";
import NucleoIcons from "./views/NucleoIcons.jsx";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Switch>
        <Route path="/index" render={props => <Index {...props} />} />
        <Route
          path="/nucleo-icons"
          render={props => <NucleoIcons {...props} />}
        />

        <Route path="/login-page" render={props => <Index {...props} />} />
        <Redirect to="/index" />
        <Redirect from="/" to="/index" />
      </Switch>
    </Switch>
  </BrowserRouter>,

  document.getElementById("root")
);
