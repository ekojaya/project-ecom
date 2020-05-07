import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
// import cookie from "js-cookie";
import { connect } from "react-redux";
const PrivateRoute = ({ component: Component, ...rest }) => {
  // const token = cookie.get('token')
  return (
    <Route
      {...rest}
      render={(props) =>
        !rest.loggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};
const mapStateToProps = (state) => {
  return {
    loggedIn: state.auth.loggedIn,
  };
};
export default connect(mapStateToProps)(PrivateRoute);
