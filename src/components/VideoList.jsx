import { Grid } from '@mui/material';
import VideoCard from './VideoCard';

const VideoList = ({ videos }) => (
  <Grid container spacing={2}>
    {videos.map(video => (
      <Grid item xs={12} sm={6} md={4} key={video.id}>
        <VideoCard video={video} />
      </Grid>
    ))}
  </Grid>
);

export default VideoList;
