import { Meteor } from 'meteor/meteor';
import { Programs } from '../../api/program/Program';
import { Stuffs } from '../../api/stuff/Stuff';
// import { Stuffs } from '../../api/stuff/Stuff.js';
import { Posts } from '../../api/post/Post.js';

/* eslint-disable no-console */

// Initialize the database with a default data document.
const addData = (data) => {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  Stuffs.collection.insert(data);
};

// Initialize the StuffsCollection if empty.
if (Stuffs.collection.find().count() === 0) {
  if (Meteor.settings.defaultData) {
    console.log('Creating default data.');
    Meteor.settings.defaultData.forEach(data => addData(data));
  }
}

const addPrograms = (program) => {
  console.log(`  Adding: ${program.school} (${program.country})`);
  Programs.collection.insert(program);
};

// Initialize the ProgramsCollection if empty.
if (Programs.collection.find().count() === 0) {
  if (Meteor.settings.defaultPrograms) {
    console.log('Creating default programs.');
    Meteor.settings.defaultPrograms.forEach(program => addPrograms(program));
  }
}
// console.log('find fetch', Programs.collection.find({}).fetch());
const addPost = (post) => {
  console.log(` Adding: ${post.title} (${post.owner})`);
  Posts.collection.insert(post);
};

if (Posts.collection.find().count() === 0) {
  if (Meteor.settings.defaultPost) {
    console.log('Creating default data.');
    Meteor.settings.defaultPost.forEach(data => addPost(data));
  }
}
