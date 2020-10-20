import React from "react";
import { Route } from "react-router-dom";
import { withAuthenticationRequired } from "@auth0/auth0-react";

const PrivateRoute = ({ component }) => (
  <Route
    component={withAuthenticationRequired(component, {
      onRedirecting: () => <isLoading />,
    })}
  />
);

export default PrivateRoute;
