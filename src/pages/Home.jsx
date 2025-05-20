import { useEffect, useState } from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';
import { videos as allVideos } from '../data/videos';
import VideoList from '../components/VideoList';
import VideoSkeleton from '../components/VideoSkeleton';

const categories = ['All', 'Tech', 'Music', 'Gaming', 'Education', 'Travel', 'News'];

const PAGE_SIZE = 6;

const Home = ({ selectedCategory, search, setSearch }) => {
  const [filteredVideos, setFilteredVideos] = useState([]);
  const [visibleVideos, setVisibleVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setLoading(true);
    setPage(1);

    const timer = setTimeout(() => {
      const filtered = allVideos.filter((video) => {
        const matchesSearch =
          video.title.toLowerCase().includes(search.toLowerCase()) ||
          video.channel.toLowerCase().includes(search.toLowerCase());

        const matchesCategory =
          selectedCategory === 'All' ||
          (selectedCategory === 'Trending' && parseFloat(video.views) > 2) ||
          (selectedCategory === 'Library' && video.category === 'Tech') ||
          (selectedCategory === 'Subscriptions' && video.channel === 'IGN') ||
          video.category === selectedCategory;

        return matchesSearch && matchesCategory;
      });

      setFilteredVideos(filtered);
      setVisibleVideos(filtered.slice(0, PAGE_SIZE));
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [selectedCategory, search]);

  const handleLoadMore = () => {
    const nextPage = page + 1;
    const nextItems = filteredVideos.slice(0, nextPage * PAGE_SIZE);
    setVisibleVideos(nextItems);
    setPage(nextPage);
  };

  return (
    <Box sx={{ flex: 1, p: { xs: 2, sm: 3 }, bgcolor: '#181818' }}>
      {/* Category Chips */}
      <Box mb={2}>
        <Typography variant="h6" color="white" gutterBottom>
          Trending Categories
        </Typography>
        <Stack direction="row" spacing={1} flexWrap="wrap">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={selectedCategory === cat ? 'contained' : 'outlined'}
              color="primary"
              size="small"
              onClick={() => {
                setSearch('');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              sx={{
                textTransform: 'capitalize',
                borderRadius: 5,
                px: 2,
                py: 0.5,
              }}
            >
              {cat}
            </Button>
          ))}
        </Stack>
      </Box>

      {/* Video Grid or Skeleton */}
      {loading ? (
        <Stack direction="row" spacing={2} flexWrap="wrap">
          {Array.from({ length: 6 }).map((_, idx) => (
            <Box key={idx} sx={{ width: { xs: '100%', sm: '48%', md: '31%', lg: '23%' } }}>
              <VideoSkeleton />
            </Box>
          ))}
        </Stack>
      ) : visibleVideos.length > 0 ? (
        <>
          <VideoList videos={visibleVideos} />
          {visibleVideos.length < filteredVideos.length && (
            <Box textAlign="center" mt={4}>
              <Button variant="contained" onClick={handleLoadMore}>
                Load More
              </Button>
            </Box>
          )}
        </>
      ) : (
        <Typography variant="h6" textAlign="center" mt={4} color="white">
          No videos found.
        </Typography>
      )}
    </Box>
  );
};

export default Home;
