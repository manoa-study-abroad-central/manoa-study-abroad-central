import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import NavBar from './NavBar';

const NavBarSelection = () => {
  const { isLogged } = useTracker(() => {
    const isLoggedIn = Meteor.user() ? Meteor.user().username : null;
    return {
      isLogged: isLoggedIn,
    };
  });
  return isLogged ? (<NavBar />) : '';
};

export default NavBarSelection;
