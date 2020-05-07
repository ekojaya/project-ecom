import React, { Component } from "react";
import Logout from "../auth/Logout";
import Container from "../../component/template/Page";
export default class index extends Component {
  render() {
    return (
      <div>
        <Container>
          {/* /.login-logo */}
          <div className="login-box">
            <div className="card">
              <div className="card-body login-card-body">
                <h4 className="login-box-msg">LogOut</h4>

                <div class="form-footer">
                  {/* <button type="submit" class="btn btn-danger btn-block">
                  Logout
                </button> */}
                  <Logout />
                </div>

                {/* /.social-auth-links */}
              </div>
              {/* /.login-card-body */}
            </div>
          </div>
        </Container>
      </div>
    );
  }
}
