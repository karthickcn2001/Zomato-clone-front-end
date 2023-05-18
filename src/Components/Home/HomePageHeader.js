import React from 'react';
import "../../Styles/Filter/header.css"
import LogIn from '../Filter/GoogleLogin'
import { LoginSocialFacebook } from 'reactjs-social-login';
import { FacebookLoginButton } from 'react-social-login-buttons';

import Modal from 'react-modal';
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    maxWidth: '500px',
    padding: '30px',
  }
}
class Header extends React.Component {
  constructor(props) {
    super(props);
    const fbUserName = sessionStorage.getItem('fbUserName');
    const fbUserProfile = sessionStorage.getItem('fbUserProfile');
    this.state = {
      loginModalIsOpen: false,
      signupModalIsOpen: false,
      googleUserName: "",
      googleUserProfile: "",
      fbUserName: fbUserName || '',
      fbUserProfile: fbUserProfile || '',
      fbLoggedIn: Boolean(fbUserName && fbUserProfile),
    };
  }

  handleGoogleLogin = (name, googleUserProfile) => {
    localStorage.setItem(
      "userObject",
      JSON.stringify({ name, picture: googleUserProfile })
    );
    this.setState({ googleUserName: name, googleUserProfile, loginModalIsOpen: false });
  };

  handleFbLoginSuccess = (res) => {
    const { name, picture } = res.data;
    this.setState({
      fbUserName: name,
      fbUserProfile: picture.data.url,
      fbLoggedIn: true,
      loginModalIsOpen: false,
      signupModalIsOpen: false
    });
    sessionStorage.setItem('fbUserName', name);
    sessionStorage.setItem('fbUserProfile', picture.data.url);
  };

  handleFbLoginFailure = (err) => {
    console.log(err);
  };

  handleGoogleSignOut = () => {
    localStorage.removeItem("userObject");
    this.setState({
      googleUserName: "",
      googleUserProfile: "",
      loginModalIsOpen: false
    });
  };

  handleFbSignOut = () => {
    this.setState({
      fbUserName: '',
      fbUserProfile: '',
      fbLoggedIn: false,
      loginModalIsOpen: false,
      signupModalIsOpen: false
    });
    sessionStorage.removeItem('fbUserName');
    sessionStorage.removeItem('fbUserProfile');
  };

  componentDidMount() {
    const storedUserObject = JSON.parse(localStorage.getItem("userObject"));
    if (storedUserObject) {
      this.setState({
        googleUserName: storedUserObject.name,
        googleUserProfile: storedUserObject.picture,
      });
    }
  }

  render() {
    const { loginModalIsOpen, signupModalIsOpen, googleUserName, googleUserProfile, fbUserName, fbUserProfile, fbLoggedIn } = this.state;

    return (
      <div>
        <div className="Navbar">
          <div className="e-circle">e!</div>
          <div className="Menu">
            {fbLoggedIn ? (
              <>
                <img
                  src={fbUserProfile}
                  alt="User profile"
                  className="ProfilePicture"
                />
                <div className="userName">
                  Welcome, {fbUserName}
                </div>
                <div className="signOut" onClick={this.handleFbSignOut}>
                  Sign Out
                </div>
              </>
            ) : googleUserName ? (
              <>
                <img
                  src={googleUserProfile}
                  alt="User profile"
                  className="ProfilePicture"
                />
                <div className="userName">
                  Welcome, {googleUserName}
                </div>
                <div className="signOut" onClick={this.handleGoogleSignOut}>
                  Sign Out
                </div>
              </>
            ) : (
              <>
                <div className="Login" onClick={() => this.setState({ loginModalIsOpen: true })}>
                  Login
                </div>
                <div className="Newaccount" onClick={() => this.setState({ signupModalIsOpen: true })}>
                  Create an account
                </div>
              </>
            )}
          </div>
          <div className="Menu-icon">&#9776;</div>
        </div>

        <Modal isOpen={loginModalIsOpen} style={customStyles}>
          <div className="parent">
            <button
              id="closeButton"
              onClick={() => this.setState({ loginModalIsOpen: false })}
            >
              X
            </button>
            <h2>Login</h2>
            <input type="text" placeholder="Email" autoFocus />
            <br />
            <br />
            <input type="text" placeholder="Password" />
            <br />
            <br />
            <div className="buttonAlign">
              <button className='logInBtnStyle'>Login</button>
              <button className='cancelBtnStyle' onClick={() => this.setState({ loginModalIsOpen: false })}>
                Cancel
              </button>
            </div>
            <hr />
            <div className="buttonContainer">
              {!fbLoggedIn && (
                <LoginSocialFacebook
                  appId='902573227643205'
                  onResolve={this.handleFbLoginSuccess}
                  onReject={this.handleFbLoginFailure}
                >
                  <FacebookLoginButton />
                </LoginSocialFacebook>
              )}
              <LogIn onUserLogin={this.handleGoogleLogin} onSignOut={this.handleGoogleSignOut} />
            </div>
          </div>
        </Modal>

        <Modal isOpen={signupModalIsOpen} style={customStyles}>
          <div id='parent'>
            <button id='closeButton' onClick={() => this.setState({ signupModalIsOpen: false })}>X</button>
            <h2>Sign Up</h2>
            <p>Please fill in this form to create an account</p>
            <hr />
            <form>
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input type="text" className="form-control" id="firstName" placeholder="First Name" autoFocus />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" className="form-control" id="lastName" placeholder="Last Name" />
              </div>
              <div className="form-group">
                <label htmlFor="mobileNumber">Mobile Number</label>
                <input type="text" className="form-control" id="mobileNumber" placeholder="Mobile Number" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" id="email" placeholder="Email" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password" placeholder="Password" />
              </div>
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm Password" />
              </div>
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="agreeToTerms" />
                <label className="form-check-label" htmlFor="agreeToTerms">I agree to the terms and privacy policy</label>
              </div>
              <hr />
              <div className='buttonContainer'>
                <button className='ProceedButton' >Proceed</button><br></br>
                <button className='CancelButton' onClick={() => this.setState({ signupModalIsOpen: false })}>Cancel</button>
              </div>
            </form>
          </div>
        </Modal>
      </div>
    );
  }
}
export default Header;


