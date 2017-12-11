import React from 'react';
import ReactDom from 'react-dom';
import { GoogleAPI, GoogleLogin, GoogleLogout, googleGetBasicProfil } from 'react-google-oauth';

import * as Google from 'react-google-oauth';
console.log(Google);

ReactDom.render(
  <GoogleAPI
    clientId="813271960575-kcnjuli6ft20n5johd7vodmmfg0k9tqs.apps.googleusercontent.com"
    onUpdateSigninStatus={(args) => console.log(args)}
  >
    <div>
      <div>
        <GoogleLogin
          scope="profile"
          fetchBasicProfile={false}
          onLoginSuccess={(response) => console.log(response)}
        />
      </div>
      <div><GoogleLogout /></div>
      <div><button onClick={() => console.log(googleGetBasicProfil())}>プロフィール取得</button></div>
    </div>
  </GoogleAPI>,
  document.getElementById('root')
);
