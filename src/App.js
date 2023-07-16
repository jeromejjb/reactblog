import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import BlogPost from './components/BlogPost';
import VideoLibrary from './components/VideoLibrary';

const App = () => {
return (
<Router>
<Routes>
<Route path="/" element={<Homepage />} />
<Route path="/post/:id" element={<BlogPost />} />
<Route path="/video-library" element={<VideoLibrary/>} />
</Routes>
</Router>
);
};

export default App;