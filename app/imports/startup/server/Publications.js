import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Programs } from '../../api/program/Program';
import { Posts } from '../../api/post/Post';
import { Comments } from '../../api/comment/Comments';

// User-level publication.
// If logged in, then publish documents owned by this user. Otherwise, publish nothing.
Meteor.publish(Programs.userPublicationName, function () {
  if (this.userId) {
    return Programs.collection.find({});
  }
  return this.ready();
});

Meteor.publish(Posts.userPublicationName, function () {
  if (this.userId) {
    return Posts.collection.find();
  }
  return this.ready();
});

Meteor.publish(Comments.userPublicationName, function () {
  return Comments.collection.find();
});

// Admin-level publication.
// If logged in and with admin role, then publish all documents from all users. Otherwise, publish nothing.
Meteor.publish(Programs.adminPublicationName, function () {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return Programs.collection.find();
  }
  return this.ready();
});

Meteor.publish(Posts.adminPublicationName, function () {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return Posts.collection.find();
  }
  return this.ready();
});

Meteor.publish(Comments.adminPublicationName, function () {
  return Comments.collection.find();
});

// alanning:roles publication
// Recommended code to publish roles for each user.
Meteor.publish(null, function () {
  if (this.userId) {
    return Meteor.roleAssignment.find({ 'user._id': this.userId });
  }
  return this.ready();
});
// eslint-disable-next-line meteor/audit-argument-checks
Meteor.publish('posts.byCountry', function (countryName) {
  return Posts.collection.find({ countryRegion: countryName });
});
