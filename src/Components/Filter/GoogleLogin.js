import React from 'react';
import jwt_decode from 'jwt-decode';
class GoogleLogIn extends React.Component {
  constructor(props) {
    super(props);
    this.handleGoogleSignOut = this.handleGoogleSignOut.bind(this);
  }
  componentDidMount() {
    const google = window.google;
    google.accounts.id.initialize({
      client_id:
        "381139685939-rug2nh76tde59t0ua69r4m53e7v1po09.apps.googleusercontent.com",
      callback: (response) => {
        const userObject = jwt_decode(response.credential);
        this.props.onUserLogin(userObject.name, userObject.picture);
        document.getElementById("signInDiv").hidden = true;
      },
    });
    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });
    google.accounts.id.prompt();
  }

  handleGoogleSignOut = () => {
    this.setState({
      userName: '',
      googleUserProfile: ''
    });
    document.getElementById("signInDiv").hidden = false;
  };

  render() {
    return (
      <div>
        <div id="signInDiv"></div>
      </div>
    );
  }
}
export default GoogleLogIn;
