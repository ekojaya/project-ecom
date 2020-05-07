import React, { Component } from "react";
import api from "../../api";
import { connect } from "react-redux";
import Error from "./Error";

class login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formdata: {
        email: "",
        password: "",
      },
      errors: {},
    };
  }
  onSubmit = (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    // Axios.post("http://127.0.0.1:8000/api/login", this.state.formdata)
    api.Auth.login(this.state.formdata)
      .then((res) => {
        // console.log(res.data);

        localStorage.setItem("token", res.data.access_token);
        this.props.setLogin(res.data.user);
        console.log(res.data.user);
        this.props.history.push("/");
      })
      .catch((e) => this.setState({ errors: e.response.data.errors }));
  };
  handleChange = (e) => {
    e.preventDefault();
    const formdata = { ...this.state.formdata };
    const name = e.target.name;
    const value = e.target.value;
    formdata[name] = value;
    this.setState({ formdata });
  };

  render() {
    return (
      <div>
        <div className="login-box">
          <div className="login-logo">
            <a href="../../index2.html">
              <b>Jamet</b> ECOM
            </a>
          </div>
          {/* /.login-logo */}
          <div className="card">
            <div className="card-body login-card-body">
              <p className="login-box-msg">Sign in to start your session</p>
              <Error
                error={
                  this.state.errors["result"]
                    ? this.state.errors["result"]
                    : null
                }
              />
              <form onSubmit={this.onSubmit}>
                <div className="form-group mb-3">
                  <label class="form-label">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    onChange={this.handleChange}
                    placeholder="Email"
                  />
                  <Error
                    error={
                      this.state.errors["email"]
                        ? this.state.errors["email"]
                        : null
                    }
                  />
                </div>
                <div className="form-group mb-3">
                  {" "}
                  <div className="row">
                    <div className="col">
                      <label className="form-label">Password</label>
                    </div>
                    <div className="col">
                      <a href="/forget-password" className="float-right small">
                        I forgot password
                      </a>
                    </div>
                  </div>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    name="password"
                    onChange={this.handleChange}
                  />
                  <Error
                    error={
                      this.state.errors["password"]
                        ? this.state.errors["password"]
                        : null
                    }
                  />
                </div>
                <div className="row">
                  <div className="col-8">
                    <div className="icheck-primary">
                      <input type="checkbox" id="remember" />
                      <label htmlFor="remember">Remember Me</label>
                    </div>
                  </div>
                  {/* /.col */}

                  {/* /.col */}
                </div>
                <div class="form-footer">
                  <button type="submit" class="btn btn-primary btn-block">
                    Sign in
                  </button>
                </div>
              </form>
              <br />

              {/* /.social-auth-links */}

              <p className="mb-0">
                <a href="/register" className="text-center">
                  Register a new membership
                </a>
              </p>
            </div>
            {/* /.login-card-body */}
          </div>
        </div>
      </div>
    );
  }
}
const mapDispastchToProps = (dispatch) => {
  return {
    setLogin: (user) => dispatch({ type: "SET_LOGIN", payload: user }),
  };
};
export default connect(null, mapDispastchToProps)(login);
