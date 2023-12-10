import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { NavLink } from 'react-router-dom';
import { Roles } from 'meteor/alanning:roles';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { BoxArrowRight, PersonFill, PersonPlusFill } from 'react-bootstrap-icons';

const NavBar = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { currentUser } = useTracker(() => ({
    currentUser: Meteor.user() ? Meteor.user().username : '',
  }), []);

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={NavLink} to="/home">
          <h2>Manoa Study Abroad Central</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto justify-content-start">
            {currentUser ? ([
              <Nav.Link id="add-stuff-nav" as={NavLink} to="/add-post" key="add" style={{ fontFamily: 'Garamond', fontSize: '18px' }}>Add Post</Nav.Link>,
              <Nav.Link id="testimonials-nav" as={NavLink} to="/list" key="list" style={{ fontFamily: 'Garamond', fontSize: '18px' }}>Testimonials</Nav.Link>,
              <Nav.Link id="programs-nav" as={NavLink} to="/programs" key="list-programs" style={{ fontFamily: 'Garamond', fontSize: '18px' }}>Programs</Nav.Link>,
              // temporary feature, might remove later
              <Nav.Link id="list-programs-nav" as={NavLink} to="/ListPrograms" key="potato" style={{ fontFamily: 'Garamond', fontSize: '18px' }}>List Programs</Nav.Link>,
            ]) : ''}
            {Roles.userIsInRole(Meteor.userId(), 'admin') ? ([
              <Nav.Link id="admin-post-nav" as={NavLink} to="/adminpost" key="adminpost" style={{ fontFamily: 'Garamond', fontSize: '18px' }}>Admin Post</Nav.Link>,
              <Nav.Link id="admin-home-nav" as={NavLink} to="/adminhome" key="adminhome" style={{ fontFamily: 'Garamond', fontSize: '18px' }}>Admin Home</Nav.Link>,
            ]) : ''}
          </Nav>
          <Nav className="justify-content-end">
            {currentUser === '' ? (
              <NavDropdown id="login-dropdown" title="Login">
                <NavDropdown.Item id="login-dropdown-sign-in" as={NavLink} to="/signin" style={{ fontFamily: 'Garamond', fontSize: '18px' }}>
                  <PersonFill />
                  Sign
                  in
                </NavDropdown.Item>
                <NavDropdown.Item id="login-dropdown-sign-up" as={NavLink} to="/signup" style={{ fontFamily: 'Garamond', fontSize: '18px' }}>
                  <PersonPlusFill />
                  Sign
                  up
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <NavDropdown id="navbar-current-user" style={{ fontFamily: 'Garamond', fontSize: '18px' }} title={currentUser}>
                <NavDropdown.Item id="navbar-sign-out" style={{ fontFamily: 'Garamond', fontSize: '18px' }} as={NavLink} to="/signout">
                  <BoxArrowRight />
                  {' '}
                  Sign
                  out
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
