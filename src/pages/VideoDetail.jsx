import { useParams } from 'react-router-dom';
import { videos } from '../data/videos';
import { Typography, Box } from '@mui/material';

const VideoDetail = () => {
  const { id } = useParams();
  const video = videos.find(v => v.id === id);

  return (
    <Box p={4}>
      <img src={video.thumbnail} alt={video.title} style={{ width: '100%', maxHeight: '400px' }} />
      <Typography variant="h4" mt={2}>{video.title}</Typography>
      <Typography variant="subtitle1" color="text.secondary">{video.channel}</Typography>
      <Typography variant="body1" mt={2}>{video.description}</Typography>
    </Box>
  );
};

export default VideoDetail;
