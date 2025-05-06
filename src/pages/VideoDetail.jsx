import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { videos } from '../data/videos';
import { Typography, Box, CircularProgress } from '@mui/material';

const VideoDetail = () => {
  const { id } = useParams();
  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetch delay
    setTimeout(() => {
      const foundVideo = videos.find((v) => v.id === id);
      setVideo(foundVideo);
      setLoading(false);
    }, 800); // Adjust as needed
  }, [id]);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 10 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (!video) {
    return (
      <Box p={4}>
        <Typography variant="h5">Video not found.</Typography>
      </Box>
    );
  }

  return (
    <Box p={4}>
      <img
        src={video.thumbnail}
        alt={video.title}
        style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }}
      />
      <Typography variant="h4" mt={2}>
        {video.title}
      </Typography>
      <Typography variant="subtitle1" color="text.secondary">
        {video.channel}
      </Typography>
      <Typography variant="body1" mt={2}>
        {video.description}
      </Typography>
    </Box>
  );
};

export default VideoDetail;
