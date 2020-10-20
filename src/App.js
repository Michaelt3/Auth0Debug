import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import JobStatus from "./components/Job Status/Job Status";
import { useAuth0 } from "@auth0/auth0-react";
import Login from "./components/Navbar/Login/Login";
import AuthNav from "./Private-route";
import PrivateRoute from "./Private-route2";
import NavBar from "./components/Navbar/NavBar";

function App() {
  const { isLoading } = useAuth0();
  if (isLoading) return <div>Loading...</div>;

  return (
    <Router>
      <Route path="/" component={Login} />
      <NavBar />
      <Switch>
        <PrivateRoute path="/home" exact component={Home} />
        <PrivateRoute path="/JobStatus.html" component={JobStatus} />
      </Switch>
    </Router>
  );
}

export default App;
