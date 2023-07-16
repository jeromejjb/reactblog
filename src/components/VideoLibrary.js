import React from 'react';

const VideoLibrary = () => {
  const videos = [
    {
      id: 1,
      title: 'Introduction to React',
      description: 'Learn the basics of React and how to build interactive web applications.',
      thumbnailUrl: 'https://example.com/thumbnail1.jpg',
      url: 'https://www.youtube.com/watch?v=12345',
    },
    {
      id: 2,
      title: 'React Hooks Tutorial',
      description: 'Explore the power of React Hooks and how they can simplify your code.',
      thumbnailUrl: 'https://example.com/thumbnail2.jpg',
      url: 'https://www.youtube.com/watch?v=67890',
    },
    {
      id: 3,
      title: 'Advanced CSS Techniques',
      description: 'Discover advanced CSS techniques to create stunning web designs.',
      thumbnailUrl: 'https://example.com/thumbnail3.jpg',
      url: 'https://www.youtube.com/watch?v=54321',
    },
  ];

  return (
    <div className="container">
      <h1 className="title is-2">Video Library</h1>
      <p className="subtitle is-6">Expand your knowledge with our video tutorials</p>
      <div className="video-list">
        {videos.map((video) => (
          <div className="card" key={video.id}>
            <div className="card-image">
              <figure className="image">
                <img src={video.thumbnailUrl} alt={video.title} />
              </figure>
            </div>
            <div className="card-content">
              <h2 className="title is-4">{video.title}</h2>
              <p>{video.description}</p>
              <a href={video.url} target="_blank" rel="noopener noreferrer" className="button is-primary">
                Watch Video
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoLibrary;
