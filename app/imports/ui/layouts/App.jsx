import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { Roles } from 'meteor/alanning:roles';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Footer from '../components/Footer';
import Landing from '../pages/Landing';
import ListStuff from '../pages/ListStuff';
import ListStuffAdmin from '../pages/ListStuffAdmin';
import AddStuff from '../pages/AddStuff';
import AddPost from '../pages/AddPost';
import EditStuff from '../pages/EditStuff';
import NotFound from '../pages/NotFound';
import SignUp from '../pages/SignUp';
import SignOut from '../pages/SignOut';
import SignIn from '../pages/SignIn';
import NotAuthorized from '../pages/NotAuthorized';
import LoadingSpinner from '../components/LoadingSpinner';
import ListPostAdmin from '../pages/ListPostAdmin';
import Programs from '../pages/Programs';
import HomePageAdmin from '../pages/HomePageAdmin';
import ListPostUser from '../pages/ListPostUser';
import StudyAbroadCenter from '../pages/StudyAbroadCenter';
import ListPrograms from '../pages/ListPrograms';
import NationalStudentExchange from '../pages/NationalStudentExchange';
import CountrySpecific from '../pages/CountrySpecific';
import MIX from '../pages/MIX';
import EditProgram from '../pages/EditProgram';
import ListProgramsAdmin from '../pages/ListProgramsAdmin';
import AddProgramAdmin from '../pages/AddProgramAdmin';
import NavBarSelection from '../components/NavBarSelection';
import HomePage from '../pages/HomePage';

/** Top-level layout component for this application. Called in imports/startup/client/startup.jsx. */
const App = () => {
  const { ready } = useTracker(() => {
    const rdy = Roles.subscription.ready();
    return {
      ready: rdy,
    };
  });
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <NavBarSelection />
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signout" element={<SignOut />} />
          <Route path="/" element={<ProtectedRoute><Landing /></ProtectedRoute>} />
          <Route path="/home" element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
          <Route path="/list" element={<ProtectedRoute><ListPostUser /></ProtectedRoute>} />
          <Route path="/listStuff" element={<ProtectedRoute><ListStuff /></ProtectedRoute>} />
          <Route path="/Programs" element={<ProtectedRoute><Programs /></ProtectedRoute>} />
          <Route path="/ListPrograms" element={<ProtectedRoute><ListPrograms /></ProtectedRoute>} />
          <Route path="/editProgram/:_id" element={<ProtectedRoute><EditProgram /></ProtectedRoute>} />
          <Route path="/StudyAbroadCenter" element={<ProtectedRoute><StudyAbroadCenter /></ProtectedRoute>} />
          <Route path="/NationalStudentExchange" element={<ProtectedRoute><NationalStudentExchange /></ProtectedRoute>} />
          <Route path="/MIX" element={<ProtectedRoute><MIX /></ProtectedRoute>} />
          <Route path="/add" element={<ProtectedRoute><AddStuff /></ProtectedRoute>} />
          <Route path="/add-post" element={<ProtectedRoute><AddPost /></ProtectedRoute>} />
          <Route path="/edit/:_id" element={<ProtectedRoute><EditStuff /></ProtectedRoute>} />
          <Route path="/admin" element={<AdminProtectedRoute ready={ready}><ListStuffAdmin /></AdminProtectedRoute>} />
          <Route path="/adminpost" element={<AdminProtectedRoute ready={ready}><ListPostAdmin /></AdminProtectedRoute>} />
          <Route path="/adminhome" element={<AdminProtectedRoute ready={ready}><HomePageAdmin /></AdminProtectedRoute>} />
          <Route path="/adminListPrograms" element={<AdminProtectedRoute ready={ready}><ListProgramsAdmin /></AdminProtectedRoute>} />
          <Route path="/adminAddProgram" element={<AdminProtectedRoute ready={ready}><AddProgramAdmin /></AdminProtectedRoute>} />
          <Route path="/notauthorized" element={<NotAuthorized />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/list/country/:countryName" element={<ProtectedRoute><CountrySpecific /></ProtectedRoute>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

/*
 * ProtectedRoute (see React Router v6 sample)
 * Checks for Meteor login before routing to the requested page, otherwise goes to signin page.
 * @param {any} { component: Component, ...rest }
 */
const ProtectedRoute = ({ children }) => {
  const isLogged = Meteor.userId() !== null;
  return isLogged ? children : <Navigate to="/signin" />;
};

/**
 * AdminProtectedRoute (see React Router v6 sample)
 * Checks for Meteor login and admin role before routing to the requested page, otherwise goes to signin page.
 * @param {any} { component: Component, ...rest }
 */
const AdminProtectedRoute = ({ ready, children }) => {
  const isLogged = Meteor.userId() !== null;
  if (!isLogged) {
    return <Navigate to="/signin" />;
  }
  if (!ready) {
    return <LoadingSpinner />;
  }
  const isAdmin = Roles.userIsInRole(Meteor.userId(), 'admin');
  return (isLogged && isAdmin) ? children : <Navigate to="/notauthorized" />;
};

// Require a component and location to be passed to each ProtectedRoute.
ProtectedRoute.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};

ProtectedRoute.defaultProps = {
  children: <Landing />,
};

// Require a component and location to be passed to each AdminProtectedRoute.
AdminProtectedRoute.propTypes = {
  ready: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};

AdminProtectedRoute.defaultProps = {
  ready: false,
  children: <Landing />,
};

export default App;
