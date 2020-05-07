import React, { Component } from "react";
import api from "../../api";
import Error from "./Error";
import { connect } from "react-redux";
class register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formdata: {
        name: "",
        email: "",
        password: "",
        role: "user",
        password_confirmation: "",
      },
      errors: {},
    };
  }
  onSubmit = (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    // Axios.post("http://127.0.0.1:8000/api/login", this.state.formdata)
    api.Auth.register(this.state.formdata)
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("token", res.data.access_token);
        this.props.setLogin(res.data.user);
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
        <div className="register-box">
          <div className="register-logo">
            <a href="#">
              <b>Jamet</b>ECOM
            </a>
          </div>
          <div className="card">
            <div className="card-body register-card-body">
              <p className="login-box-msg">Register a new membership</p>
              <form onSubmit={this.onSubmit}>
                <div className="form-group mb-3">
                  <label class="form-label">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    onChange={this.handleChange}
                    className="form-control"
                    placeholder="Full name"
                  />
                  <Error
                    error={
                      this.state.errors["name"]
                        ? this.state.errors["name"]
                        : null
                    }
                  />
                </div>
                <div className="form-group mb-3">
                  <label class="form-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    onChange={this.handleChange}
                    className="form-control"
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
                  <label class="form-label">Password</label>
                  <input
                    type="password"
                    name="password"
                    onChange={this.handleChange}
                    className="form-control"
                    placeholder="Password"
                  />
                  <Error
                    error={
                      this.state.errors["password"]
                        ? this.state.errors["password"]
                        : null
                    }
                  />
                </div>
                <div className="form-group mb-3">
                  <label class="form-label">Retrype Password</label>
                  <input
                    type="password"
                    name="password_confirmation"
                    onChange={this.handleChange}
                    className="form-control"
                    placeholder="Retype password"
                  />
                  <Error
                    error={
                      this.state.errors["password"]
                        ? this.state.errors["password"]
                        : null
                    }
                  />
                </div>

                <div className="icheck-primary">
                  <input
                    type="checkbox"
                    id="agreeTerms"
                    name="terms"
                    defaultValue="agree"
                  />
                  <label htmlFor="agreeTerms">
                    I agree to the <a href="#">terms</a>
                  </label>
                </div>

                {/* /.col */}

                <button
                  type="submit"
                  className="btn btn-primary btn-block btn-flat"
                >
                  Register
                </button>

                {/* /.col */}
              </form>
              <br />
              <a href="/login" className="text-center">
                I already have a membership
              </a>
            </div>
            {/* /.form-box */}
          </div>
          {/* /.card */}
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
export default connect(null, mapDispastchToProps)(register);
