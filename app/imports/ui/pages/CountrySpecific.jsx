import React, { useState, useEffect, index } from 'react';
import { useParams } from 'react-router-dom';
import { Posts } from '/imports/api/post/Post';

const CountrySpecific = () => {
  const { countryName } = useParams();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    // eslint-disable-next-line no-undef
    const subscription = Meteor.subscribe('posts.byCountry', countryName, {
      onReady: function () {
        const postsData = Posts.collection.find({ countryRegion: countryName }).fetch();
        setPosts(postsData);
        setLoading(false);
      },
    });

    return () => subscription.stop();
  }, [countryName]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{countryName} Posts</h1>
      {posts.map((post) => (
        <div key={post._id} style={{ marginBottom: '20px', padding: '10px' }}>
          {index !== 0 && <hr style={{ borderTop: '3px solid #aaa', marginTop: '20px', marginBottom: '20px' }} />}
          <h3 style={{ fontSize: '1.5em' }}>Title: <span style={{ fontWeight: 'normal', fontSize: '1em' }}> {post.title }</span></h3>
          <h3 style={{ fontSize: '1.5em' }}>Program: <span style={{ fontWeight: 'normal', fontSize: '1em' }}>{post.program}</span></h3>
          <h3 style={{ fontSize: '1.5em' }}>Country/Region: <span style={{ fontWeight: 'normal', fontSize: '1em' }}> {post.countryRegion}</span></h3>
          <h3 style={{ fontSize: '1.5em' }}>By <span style={{ fontWeight: 'normal', fontSize: '1em' }}>{post.name }</span></h3>
          <p>{post.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CountrySpecific;
