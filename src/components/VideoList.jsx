import { Grid } from '@mui/material';
import VideoCard from './VideoCard';

const VideoList = ({ videos }) => (
  <Grid
    container
    spacing={3}
    sx={{
      width: '100%',
      px: { xs: 2, sm: 3, md: 4 },
      py: 2,
      bgcolor: '#181818',
    }}
  >
    {videos.map((video) => (
      <Grid
        item
        key={video.id}
        xs={12}
        sm={6}
        md={4}
        lg={3}
        xl={2.4}
        sx={{
          display: 'flex',
        }}
      >
        <VideoCard video={video} />
      </Grid>
    ))}
  </Grid>
);

export default VideoList;
