import React, { Component } from "react";

export default class forget_pass extends Component {
  render() {
    return (
      <div>
        {/* /.login-logo */}
        <div className="login-box">
          <div className="card">
            <div className="card-body login-card-body">
              <h4 className="login-box-msg">Forgot password</h4>
              <form action="../../index3.html" method="post">
                <p class="text-muted">
                  Enter your email address and your password will be reset and
                  emailed to you.
                </p>
                <div className="form-group mb-3">
                  <label class="form-label">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>

                <div class="form-footer">
                  <button type="submit" class="btn btn-primary btn-block">
                    Send me new password
                  </button>
                </div>
              </form>

              {/* /.social-auth-links */}
            </div>
            {/* /.login-card-body */}
          </div>
        </div>
      </div>
    );
  }
}
