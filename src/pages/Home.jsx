import { useState } from 'react';
import { Box, TextField, Typography, Button, Stack } from '@mui/material';
import { videos } from '../data/videos';
import VideoList from '../components/VideoList';

const categories = ['All', 'Tech', 'Music', 'Gaming', 'Education', 'Travel', 'News'];

const Home = ({ selectedCategory, search, setSearch }) => {
  const filteredVideos = videos.filter((video) => {
    const matchesSearch =
      video.title.toLowerCase().includes(search.toLowerCase()) ||
      video.channel.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === 'All' ||
      (selectedCategory === 'Trending' && parseFloat(video.views) > 2) ||
      (selectedCategory === 'Library' && video.category === 'Tech') || // simulate
      (selectedCategory === 'Subscriptions' && video.channel === 'IGN') ||
      video.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <Box sx={{ flex: 1, p: 3, bgcolor: '#181818' }}>
      {/* Search */}
      <TextField
        fullWidth
        label="Search by title or channel"
        variant="outlined"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        sx={{
          bgcolor: 'white',
          borderRadius: 1,
          mb: 3,
          input: { color: 'black' },
        }}
      />

      {/* Category Chips */}
      <Stack direction="row" spacing={2} mb={3}>
        {categories.map((cat) => (
          <Button
            key={cat}
            variant={selectedCategory === cat ? 'contained' : 'outlined'}
            color="primary"
            onClick={() => {
              setSearch('');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            {cat}
          </Button>
        ))}
      </Stack>

      {/* Videos */}
      {filteredVideos.length > 0 ? (
        <VideoList videos={filteredVideos} />
      ) : (
        <Typography variant="h6" textAlign="center" mt={4} color="white">
          No videos found.
        </Typography>
      )}
    </Box>
  );
};

export default Home;
