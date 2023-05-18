import React from 'react';
import GoogleLogIn from '../Filter/GoogleLogin';

function GoogleLoginButton(props) {
  const { onUserLogin, onSignOut } = props;
  return (
    <div>
      <button onClick={() => window.google.accounts.id.prompt()}>
        Login with Google
      </button>
      <GoogleLogIn onUserLogin={onUserLogin} onSignOut={onSignOut} />
    </div>
  );
}

export default GoogleLoginButton;

