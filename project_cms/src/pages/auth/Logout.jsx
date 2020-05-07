import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
function Logout(props) {
  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    props.logout();
  };
  return (
    <div>
      <Link className="btn btn-danger" to="/logout" onClick={handleLogout}>
        Logout
      </Link>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.auth.loggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch({ type: "SET_LOGOUT" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
