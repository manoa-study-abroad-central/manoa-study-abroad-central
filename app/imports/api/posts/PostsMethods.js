import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Posts } from './Posts.js';

Meteor.methods({
  // Inserts a new post into the Posts collection
  'post.insert'(post) {
    check(post, { title: String, body: String, privacy: String });

    // Authorization check: ensure user is logged in
    if (!this.userId) throw new Meteor.Error('not-authorized');

    // Insert post using Posts.collection
    Posts.collection.insert(post);
  },

  // Removes a post from the Posts collection, ensuring user ownership
  'post.remove'(postId) {
    check(postId, String);

    // Retrieve the post to confirm ownership.
    const post = Posts.collection.findOne(postId);

    // Authorization check: user must be logged in and owner of the post.
    if (!this.userId || post.ownerId !== this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    // Remove the post from the Posts collection
    Posts.collection.remove(postId);
  },
});
