import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  Box,
  Stack,
  Avatar,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const VideoCard = ({ video }) => {
  const [hovered, setHovered] = useState(false);
  const videoDuration = '10:12'; // Simulated

  return (
    <Card
      sx={{
        bgcolor: '#181818',
        color: 'white',
        boxShadow: 'none',
        borderRadius: 2,
        transition: 'transform 0.3s',
        '&:hover': {
          transform: 'scale(1.02)',
        },
      }}
    >
      <Link
        to={`/video/${video.id}`}
        style={{
          textDecoration: 'none',
          color: 'inherit',
          display: 'block',
        }}
      >
        {/* Thumbnail Preview */}
        <Box
          sx={{
            width: '100%',
            height: 180,
            position: 'relative',
            borderRadius: '10px',
            overflow: 'hidden',
          }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {hovered ? (
            <iframe
              src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1&mute=1&controls=0&showinfo=0`}
              title={video.title}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
              }}
            />
          ) : (
            <CardMedia
              component="img"
              height="180"
              image={video.thumbnail}
              alt={video.title}
              sx={{ borderRadius: '10px' }}
            />
          )}

          {/* Duration Overlay */}
          {!hovered && (
            <Box
              sx={{
                position: 'absolute',
                bottom: 8,
                right: 8,
                bgcolor: 'rgba(0,0,0,0.8)',
                px: 0.5,
                py: 0.2,
                borderRadius: '4px',
              }}
            >
              <Typography variant="caption" color="white">
                {videoDuration}
              </Typography>
            </Box>
          )}
        </Box>
      </Link>

      {/* Info Section */}
      <CardContent sx={{ px: 0, pt: 1.5 }}>
        <Stack direction="row" spacing={1} alignItems="flex-start">
          <Link to={`/channel/${video.channel}`}>
            <Avatar sx={{ bgcolor: '#1976d2', fontSize: 14 }}>
              {video.channel.charAt(0).toUpperCase()}
            </Avatar>
          </Link>
          <Box>
            <Typography
              variant="subtitle1"
              fontWeight="bold"
              gutterBottom
              sx={{
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              }}
            >
              {video.title}
            </Typography>
            <Link
              to={`/channel/${video.channel}`}
              style={{ textDecoration: 'none', color: 'gray' }}
            >
              <Typography variant="subtitle2">{video.channel}</Typography>
            </Link>
            <Typography variant="caption" color="gray">
              {video.views} • {video.category}
            </Typography>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
