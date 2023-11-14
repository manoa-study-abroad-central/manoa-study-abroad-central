// StuffMethods.js
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Stuff from './Stuff.js'; // Importing the Stuff collection

Meteor.methods({
  'stuff.insert'(stuffData) {
    // Perform checks to ensure the correct data types are being received
    check(stuffData, {
      title: String,
      description: String,
    });

    // Check that the user is logged in before inserting a document
    if (!this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    // Insert the document into the Stuff collection
    Stuff.insert({
      ...stuffData,
      createdAt: new Date(), // Set the current date and time
      ownerId: this.userId, // Set the user ID of the document owner
    });
  },

  'stuff.remove'(stuffId) {
    check(stuffId, String);

    // Check that the user is logged in and the document belongs to the user
    const stuff = Stuff.findOne(stuffId);
    if (!this.userId || stuff.ownerId !== this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    // Remove the document from the Stuff collection
    Stuff.remove(stuffId);
  },
});
