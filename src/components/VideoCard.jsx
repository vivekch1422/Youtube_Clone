import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const VideoCard = ({ video }) => (
  <Card sx={{ maxWidth: 345, m: 2 }}>
    <Link to={`/video/${video.id}`}>
      <CardMedia component="img" height="180" image={video.thumbnail} />
    </Link>
    <CardContent>
      <Typography variant="h6">{video.title}</Typography>
      <Typography variant="subtitle2" color="text.secondary">{video.channel}</Typography>
      <Typography variant="caption">{video.views} views</Typography>
    </CardContent>
  </Card>
);

export default VideoCard;
