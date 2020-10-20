import { useAuth0 } from "@auth0/auth0-react";
import NavBar from "./components/Navbar/NavBar";

const AuthNav = () => {
  const { isAuthenticated } = useAuth0();
  if (isAuthenticated) {
    return NavBar;
  } else {
    return null;
  }
};

export default AuthNav;
