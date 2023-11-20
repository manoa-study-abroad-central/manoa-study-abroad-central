import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Stuff from './Stuff.js';

Meteor.methods({
  // Inserts a new post with title and description into the Stuff collection
  'stuff.insert'(stuffData) {
    check(stuffData, { title: String, description: String });

    // Authorization check: ensure user is logged in
    if (!this.userId) throw new Meteor.Error('not-authorized');

    // Insert post with additional data
    Stuff.insert({
      ...stuffData,
      createdAt: new Date(), // Set the current date and time
      ownerId: this.userId, // Set the user ID of the document owner
    });
  },

  // Removes a post from the Stuff collection, ensuring user ownership
  'stuff.remove'(stuffId) {
    check(stuffId, String);

    // Retrieve the post to confirm ownership.
    const stuff = Stuff.findOne(stuffId);

    // Authorization check: user must be logged in and owner of the post.
    if (!this.userId || stuff.ownerId !== this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    // Remove the post from the Stuff collection
    Stuff.remove(stuffId);
  },
});
