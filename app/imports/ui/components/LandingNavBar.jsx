import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { NavLink } from 'react-router-dom';
import { Roles } from 'meteor/alanning:roles';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { PersonFill, PersonPlusFill } from 'react-bootstrap-icons';

const NavBar = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { currentUser } = useTracker(() => ({
    currentUser: Meteor.user() ? Meteor.user().username : '',
  }), []);

  return (
    <Navbar expand="lg" style={{ backgroundColor: 'transparent' }}>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto justify-content-start">
            {currentUser ? ([
              <Nav.Link id="add-stuff-nav" as={NavLink} to="/add-post" key="add">Add Post</Nav.Link>,
              <Nav.Link id="testimonials-nav" as={NavLink} to="/list" key="list">Testimonials</Nav.Link>,
              <Nav.Link id="programs-nav" as={NavLink} to="/programs" key="list-programs">Programs</Nav.Link>,
              // temporary feature, might remove later
              <Nav.Link id="list-programs-nav" as={NavLink} to="/ListPrograms" key="potato">List Programs</Nav.Link>,
            ]) : ''}
            {Roles.userIsInRole(Meteor.userId(), 'admin') ? ([
              <Nav.Link id="admin-post-nav" as={NavLink} to="/adminpost" key="adminpost">Admin Post</Nav.Link>,
              <Nav.Link id="admin-home-nav" as={NavLink} to="/adminhome" key="adminhome">Admin Home</Nav.Link>,
            ]) : ''}
          </Nav>
          <Nav className="justify-content-end">
            <Button id="login-button" variant="transparent" href="/signin"><PersonFill />Log In</Button>
            <Button id="signup-button" variant="transparent" href="/signup"><PersonPlusFill />Sign Up</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
