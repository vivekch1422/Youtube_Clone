import { Grid } from '@mui/material';
import VideoCard from './VideoCard';

const VideoList = ({ videos }) => (
  <Grid
    container
    spacing={4}
    sx={{
      width: '100%',
      justifyContent: 'flex-start',
      px: 4,
    }}
  >
    {videos.map((video) => (
      <Grid
        key={video.id}
        sx={{
          flexBasis: {
            xs: '100%',
            sm: '48%',
            md: '31%',
            lg: '23%',
          },
          flexGrow: 1,
          display: 'flex',
        }}
      >
        <VideoCard video={video} />
      </Grid>
    ))}
  </Grid>
);

export default VideoList;
