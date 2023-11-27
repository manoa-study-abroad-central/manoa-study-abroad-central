import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

/**
 * The PostsCollection. It encapsulates state and variable values for posts.
 */
class PostsCollection {
  constructor() {
    // The name of this collection.
    this.name = 'PostsCollection';
    // Define the Mongo collection.
    this.collection = new Mongo.Collection('posts'); // Use a more standard name for the collection

    // Define the structure of each document in the collection.
    this.schema = new SimpleSchema({
      title: String,
      body: String,
      privacy: {
        type: String,
        allowedValues: ['Public', 'Private'],
      },
      createdAt: {
        type: Date,
        // eslint-disable-next-line consistent-return
        autoValue: function () {
          if (this.isInsert) {
            return new Date();
          } if (this.isUpsert) {
            return { $setOnInsert: new Date() };
          }
          this.unset(); // Prevent user from supplying their own value
        },
      },
      ownerId: {
        type: String,
        // eslint-disable-next-line consistent-return
        autoValue: function () {
          if (this.isInsert) {
            return this.userId;
          } if (this.isUpsert) {
            return { $setOnInsert: this.userId };
          }
          this.unset(); // Prevent user from supplying their own value
        },
      },
    });

    // Attach the schema to the collection.
    this.collection.attachSchema(this.schema);

    // Define names for publications and subscriptions if needed
    this.userPublicationName = `${this.name}.publication.user`;
    this.adminPublicationName = `${this.name}.publication.admin`;
  }
}

/**
 * The singleton instance of the PostsCollection.
 * @type {PostsCollection}
 */
export const Posts = new PostsCollection();
