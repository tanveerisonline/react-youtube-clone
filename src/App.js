import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import React from 'react'
import { Navbar, Feed, VideoDetail, ChannelDetail, SearchFeed } from './components';

const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: "#000" }}>
      <Navbar />
    </Box>
    <Routes>
      <Route path="/" exact element={<Feed />} />
      <Route path="/video/:id" element={<VideoDetail />} />
      <Route path="/channel/:id" element={<ChannelDetail />} />
      <Route path="/search/:searchTeram" element={<SearchFeed />} />
    </Routes>
  </BrowserRouter>
)

export default App