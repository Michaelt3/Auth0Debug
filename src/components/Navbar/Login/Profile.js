import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useApi } from "./external-api.js";
import LoginButton from "./LoginButton";

const Profile = () => {
  const opts = {
    audience: `https://dev-ast.us.auth0.com/api/v2/`,
    scope: `read:current_user`,
  };
  const { getTokenWithPopup } = useAuth0();
  const { loading, error, refresh, data: users } = useApi(
    "https://dev-ast.us.auth0.com/api/v2/users",
    opts
  );
  const getTokenAndTryAgain = async () => {
    await getTokenWithPopup(opts);
    refresh();
  };
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    if (error.error === "login_required") {
      return <LoginButton />;
    }
    if (error.error === "consent_required") {
      return (
        <button onClick={getTokenAndTryAgain}>Consent to reading users</button>
      );
    }
    return <div>Oops {error.message}</div>;
  }
  return <div>Logged In</div>;
};
export default Profile;
