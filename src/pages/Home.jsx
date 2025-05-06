import { useState, useEffect } from 'react';
import { Box, TextField, Typography } from '@mui/material';
import { videos } from '../data/videos';
import VideoList from '../components/VideoList';

const Home = () => {
  const [search, setSearch] = useState('');
  const [filteredVideos, setFilteredVideos] = useState(videos);

  useEffect(() => {
    const filtered = videos.filter(
      (video) =>
        video.title.toLowerCase().includes(search.toLowerCase()) ||
        video.channel.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredVideos(filtered);
  }, [search]);

  return (
    <Box
      sx={{
        width: '100vw',
        px: 4,
        mt: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Box mb={3} sx={{ width: '100%', maxWidth: '1000px' }}>
        <TextField
          fullWidth
          label="Search by title or channel"
          variant="outlined"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{
            bgcolor: 'white',
            borderRadius: 1,
            input: { color: 'black' },
          }}
        />
      </Box>

      <Box sx={{ width: '100%' }}>
        {filteredVideos.length > 0 ? (
          <VideoList videos={filteredVideos} />
        ) : (
          <Typography variant="h6" textAlign="center" mt={4}>
            No videos found.
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default Home;
