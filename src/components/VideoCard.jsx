import { Card, CardContent, Typography, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const VideoCard = ({ video }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Card
      sx={{
        bgcolor: '#181818',
        color: 'white',
        boxShadow: 'none',
        '&:hover': {
          transform: 'scale(1.02)',
          transition: 'transform 0.3s',
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
        {/* Preview Area */}
        <div
          style={{
            width: '100%',
            height: '180px',
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
                pointerEvents: 'none', // 👈 allows clicks to pass through iframe
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
        </div>

        {/* Info */}
        <CardContent sx={{ px: 0 }}>
          <Typography variant="subtitle1" fontWeight="bold" gutterBottom noWrap>
            {video.title}
          </Typography>
          <Typography variant="subtitle2" color="gray" noWrap>
            {video.channel}
          </Typography>
          <Typography variant="caption" color="gray">
            {video.views} • {video.category}
          </Typography>
        </CardContent>
      </Link>
    </Card>
  );
};

export default VideoCard;
