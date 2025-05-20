import { Grid } from '@mui/material';
import VideoCard from './VideoCard';

const VideoList = ({ videos }) => (
  <Grid
    container
<<<<<<< HEAD
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
=======
    spacing={4}
  sx={{
  width: '100%',
  justifyContent: 'flex-start',
  px: 4,
  bgcolor: '#181818', // Add this
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
>>>>>>> fac1f91be537984dc039803532b170922a590033
          display: 'flex',
        }}
      >
        <VideoCard video={video} />
      </Grid>
    ))}
  </Grid>
);

export default VideoList;
