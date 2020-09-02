import React, { Component } from 'react';
import './App.css';
import GoogleLogin from 'react-google-login';

export class App extends Component {
  responseGoogle = response => {
    console.log(response);
    console.log(response.profileObj);
  }
  render() {
    return (
      <div>
        <GoogleLogin
          clientId="438413243878-k06ngkocaftcdm9vpi3r6l2qmr3sr56i.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
          cookiePolicy={'single_host_origin'}
          />
      </div>
    )
  }
}

export default App
