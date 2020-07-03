import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Login from "./components/Login/Login";
import Home from "./components/Home";

import { isAuthenticated } from "./services/AuthService";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={() => <Login></Login>} />
      <PrivateRoute path="/app" component={() => <Home></Home>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
