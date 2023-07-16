import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
    const posts = [
        {
          id: 1,
          title: 'How to Set Up a Development Environment',
          content: 'Content for the development environment post',
          url: '/post/1',
        },
        {
          id: 2,
          title: 'Getting Started with React and Bulma',
          content: 'Content for the React and Bulma post',
          url: '/post/2',
        },
        {
          id: 3,
          title: 'Deploying a React App to AWS',
          content: 'Content for the React app deployment post',
          url: '/post/3',
        },
      ];

  return (
    <section className="hero is-fullheight is-primary">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-half">
              <h1 className="title is-size-1 is-size-3-mobile">
                Welcome to CodeCraft
              </h1>
              <h2 className="subtitle is-size-4 is-size-5-mobile">
                Unlock the Power of Blogging
              </h2>
              <p className="has-text-weight-semibold">
                Start and grow your blog with our all-in-one platform. We provide the tools,
                resources, and support you need to succeed.
              </p>
            </div>
          </div>
          <div className="columns is-centered mt-6">
            {posts.map((post) => (
              <div className="column is-one-third" key={post.id}>
                <Link to={post.url}>
                  <div className="box">
                  <h2 className="title is-size-4 post-title">{post.title}</h2>
                    <p>{post.content}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <div className="columns is-centered">
            <div className="column">
            <Link to="/video-library" className="button is-primary is-large mt-6">
                Start Learning
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homepage;
