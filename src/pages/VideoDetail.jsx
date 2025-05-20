import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
<<<<<<< HEAD
import {
  Box,
  Typography,
  Skeleton,
  Stack,
  Paper,
  Avatar,
  Button,
} from '@mui/material';
=======
import { Box, Typography, CircularProgress, Divider } from '@mui/material';
>>>>>>> fac1f91be537984dc039803532b170922a590033
import { videos } from '../data/videos';
import VideoList from '../components/VideoList';

const VideoDetail = () => {
  const { id } = useParams();
  const [video, setVideo] = useState(null);
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);
<<<<<<< HEAD
  const [showFullDesc, setShowFullDesc] = useState(false);
=======
>>>>>>> fac1f91be537984dc039803532b170922a590033

  useEffect(() => {
    const found = videos.find((v) => v.id === id);
    const others = videos.filter((v) => v.id !== id);

    setTimeout(() => {
      setVideo(found);
      setRelated(others);
      setLoading(false);
<<<<<<< HEAD
    }, 1000);
  }, [id]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        gap: 4,
        p: { xs: 2, md: 4 },
        bgcolor: '#181818',
        color: 'white',
      }}
    >
      {/* Main Video Section */}
      <Box flex={2}>
        {loading ? (
          <>
            <Skeleton
              variant="rectangular"
              height={0}
              sx={{ paddingTop: '56.25%', borderRadius: 2, mb: 2 }}
            />
            <Skeleton variant="text" height={32} width="80%" sx={{ mb: 1 }} />
            <Skeleton variant="text" height={24} width="60%" />
            <Skeleton
              variant="rectangular"
              height={120}
              sx={{ borderRadius: 1, mt: 3 }}
            />
          </>
        ) : video ? (
          <>
            {/* Player */}
            <Box
              sx={{
                position: 'relative',
                paddingTop: '56.25%',
                mb: 2,
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

            {/* Title */}
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              {video.title}
            </Typography>

            {/* Channel Info */}
            <Stack direction="row" alignItems="center" spacing={2} mb={2}>
              <Avatar sx={{ bgcolor: '#1976d2' }}>
                {video.channel.charAt(0).toUpperCase()}
              </Avatar>
              <Box>
                <Typography variant="subtitle1" fontWeight="bold">
                  {video.channel}
                </Typography>
                <Typography variant="caption" color="gray">
                  {video.views} views
                </Typography>
              </Box>
              <Button
                variant="contained"
                color="error"
                size="small"
                sx={{ textTransform: 'none', ml: 'auto' }}
              >
                Subscribe
              </Button>
            </Stack>

            {/* Description */}
            <Paper elevation={1} sx={{ p: 2, bgcolor: '#202020', mt: 2 }}>
              <Typography
                variant="body1"
                sx={{
                  display: '-webkit-box',
                  WebkitLineClamp: showFullDesc ? 'unset' : 3,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                }}
              >
                {video.description}
              </Typography>
              {video.description.length > 120 && (
                <Typography
                  variant="button"
                  color="primary"
                  onClick={() => setShowFullDesc((prev) => !prev)}
                  sx={{
                    mt: 1,
                    cursor: 'pointer',
                    display: 'inline-block',
                  }}
                >
                  {showFullDesc ? 'Show less' : 'Show more'}
                </Typography>
              )}
            </Paper>
          </>
        ) : (
          <Typography variant="h5">Video not found.</Typography>
        )}
      </Box>

      {/* Related Videos */}
      {!loading && related.length > 0 && (
        <Box flex={1} sx={{ maxHeight: '100vh', overflowY: 'auto', pr: 1 }}>
          <Typography variant="h6" mb={2}>
            Related Videos
          </Typography>
          <VideoList videos={related.slice(0, 6)} />
        </Box>
      )}
=======
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
>>>>>>> fac1f91be537984dc039803532b170922a590033
    </Box>
  );
};

export default VideoDetail;
