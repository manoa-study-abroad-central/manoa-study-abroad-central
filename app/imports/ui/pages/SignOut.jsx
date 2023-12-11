import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Navigate } from 'react-router-dom';

/* After the user clicks the "SignOut" link in the NavBar, log them out and display this page. */
const SignOut = () => {
  Meteor.logout((err) => {
    if (err) {
      console.error('Logout failed', err);
    } else {
      <Navigate to="/" />;
    }
  });

  return (
    <div id="signout-page">You have been signed out.</div>
  );
};
export default SignOut;
