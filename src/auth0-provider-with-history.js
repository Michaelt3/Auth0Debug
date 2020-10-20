import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import { useHistory } from "react-router-dom";

const Auth0ProviderWithHistory = ({ children }) => {
  const history = useHistory();

  const onRedirectCallback = (appState) => {
    history.push(appState?.returnTo || window.location.pathname);
  };
  return (
    <Auth0Provider
      domain="dev-ast.us.auth0.com"
      clientId="movuZ7wMel8p09duKJLx5UPkAvlzzr7n"
      redirectUri="http://localhost:3000/home"
      audience="https://dev-ast.us.auth0.com/api/v2/"
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;
