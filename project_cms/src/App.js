import React from "react";
import "./assets/dist/css/adminlte.css";
import "./assets/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import login from "./pages/auth/login";
import register from "./pages/auth/register";
import index from "./pages/dashboard";
import forget_pass from "./pages/auth/forget_pass";
import PrivateRoute from "./pages/auth/PrivateRoute";
import AuthRoute from "./pages/auth/AuthRoute";
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <PrivateRoute exact path="/login" component={login} />
          <PrivateRoute exact path="/register" component={register} />
          <Route exact path="/forget-password" component={forget_pass} />
          <Route exact path="/" component={index} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
