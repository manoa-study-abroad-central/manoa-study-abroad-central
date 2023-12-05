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
      school: {
        type: String,
        defaultValue: '',
      },
      country: {
        type: String,
        // eslint-disable-next-line max-len
        allowedValues: ['Australia', 'Canada', 'China', 'Czech Republic', 'Denmark', 'Fiji', 'Finland', 'France', 'French Polynesia', 'Germany', 'Hong Kong', 'Indonesia', 'Italy', 'Japan', 'Korea', 'Malaysia', 'Morocco', 'Netherlands', 'New Zealand', 'Norway', 'Philippines', 'Singapore', 'Spain', 'Sweden', 'Switzerland', 'Taiwan', 'Thailand', 'United Kingdom', 'United States'],
        defaultValue: 'Australia',
      },
      description: String,
      image: String,
      site: {
        type: String,
        allowedValues: ['Manoa International Exchange (MIX)', 'Study Abroad Center', 'National Student Exchange (NSE)'],
        defaultValue: 'Manoa International Exchange (MIX)',
      },
      url: {
        type: String,
        defaultValue: '',
      },
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
