// src/pages/Channel.jsx
import { useParams } from 'react-router-dom';
import { Box, Typography, Avatar, Stack } from '@mui/material';
import { videos } from '../data/videos';
import VideoList from '../components/VideoList';

const Channel = () => {
  const { name } = useParams();
  const channelVideos = videos.filter((v) => v.channel === name);

  return (
    <Box sx={{ bgcolor: '#181818', minHeight: '100vh', color: 'white', px: 3, py: 4 }}>
      {/* Channel Header */}
      <Stack direction="row" alignItems="center" spacing={2} mb={4}>
        <Avatar sx={{ bgcolor: '#1976d2', width: 64, height: 64 }}>
          {name.charAt(0).toUpperCase()}
        </Avatar>
        <Typography variant="h5" fontWeight="bold">
          {name}
        </Typography>
      </Stack>

      {/* Channel Videos */}
      <Typography variant="h6" gutterBottom>
        Videos
      </Typography>
      <VideoList videos={channelVideos} />
    </Box>
  );
};

export default Channel;
