import { Card, Skeleton, Box } from '@mui/material';

const VideoSkeleton = () => {
  return (
    <Card
      sx={{
        bgcolor: '#181818',
        color: 'white',
        boxShadow: 'none',
        borderRadius: 2,
      }}
    >
      <Skeleton variant="rectangular" height={180} sx={{ borderRadius: 2 }} />
      <Box sx={{ px: 1.5, py: 1 }}>
        <Skeleton variant="text" height={20} width="90%" />
        <Skeleton variant="text" height={20} width="60%" />
        <Skeleton variant="text" height={15} width="40%" />
      </Box>
    </Card>
  );
};

export default VideoSkeleton;
