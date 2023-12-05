import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

/**
 * The ProgramsCollection. It encapsulates state and variable values for stuff.
 */
class ProgramsCollection {
  constructor() {
    // The name of this collection.
    this.name = 'ProgramsCollection';
    // Define the Mongo collection.
    this.collection = new Mongo.Collection(this.name);
    // Define the structure of each document in the collection.
    this.schema = new SimpleSchema({
      school: String,
      country: String,
      description: String,
      image: String,
      site: String,
      url: String,
    });
    // Attach the schema to the collection, so all attempts to insert a document are checked against schema.
    this.collection.attachSchema(this.schema);
    // Define names for publications and subscriptions
    this.userPublicationName = `${this.name}.publication.user`;
    this.adminPublicationName = `${this.name}.publication.admin`;
  }
}

/**
 * The singleton instance of the ProgramsCollection.
 * @type {ProgramsCollection}
 */
export const Programs = new ProgramsCollection();
