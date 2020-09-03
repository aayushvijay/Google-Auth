import React, { Component } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";

const CLIENT_ID =
  "438413243878-k06ngkocaftcdm9vpi3r6l2qmr3sr56i.apps.googleusercontent.com";

class GoogleBtn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogined: false,
    };

    this.login = this.login.bind(this);
    this.handleLoginFailure = this.handleLoginFailure.bind(this);
    this.logout = this.logout.bind(this);
    this.handleLogoutFailure = this.handleLogoutFailure.bind(this);
  }

  login = (response) => {
    if (response.accessToken) {
      this.setState({
        isLogined: true,
      });
    }
  };

  logout = (response) => {
    this.setState({
      isLogined: false,
    });
  };

  handleLoginFailure = (response) => {
    console.log("Failed to log in");
  };

  handleLogoutFailure = (response) => {
    console.log("Failed to log out");
  };

  render() {
    return (
      <div>
        {this.state.isLogined ? (
          <GoogleLogout
            clientId={CLIENT_ID}
            buttonText="Logout"
            onLogoutSuccess={this.logout}
            onFailure={this.handleLogoutFailure}
          ></GoogleLogout>
        ) : (
          <GoogleLogin
            clientId={CLIENT_ID}
            buttonText="Login"
            onSuccess={this.login}
            onFailure={this.handleLoginFailure}
            cookiePolicy={"single_host_origin"}
            responseType="code,token"
          />
        )}
      </div>
    );
  }
}

export default GoogleBtn;
