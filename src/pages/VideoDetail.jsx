import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Box, Typography, CircularProgress, Divider } from '@mui/material';
import { videos } from '../data/videos';
import VideoList from '../components/VideoList';

const VideoDetail = () => {
  const { id } = useParams();
  const [video, setVideo] = useState(null);
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const found = videos.find((v) => v.id === id);
    const others = videos.filter((v) => v.id !== id);

    setTimeout(() => {
      setVideo(found);
      setRelated(others);
      setLoading(false);
    }, 500); // simulate loading
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
    <Box sx={{ p: 4 }}>
      <Box
        sx={{
          position: 'relative',
          paddingTop: '56.25%', // 16:9 aspect ratio
          mb: 3,
        }}
      >
        <iframe
          src={`https://www.youtube.com/embed/${video.videoId}`}
          title={video.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '10px',
          }}
        ></iframe>
      </Box>

      <Typography variant="h4" gutterBottom>{video.title}</Typography>
      <Typography variant="subtitle1" color="text.secondary">
        {video.channel} • {video.views} views
      </Typography>
      <Typography variant="body1" mt={2} mb={4}>
        {video.description}
      </Typography>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h5" mb={2}>Related Videos</Typography>
      <VideoList videos={related} />
    </Box>
  );
};

export default VideoDetail;
