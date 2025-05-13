import React from 'react';
import { Box, Stack, Button, useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';

const Sidebar = ({ setSelectedCategory, setSearch }) => {
  const isSmallScreen = useMediaQuery('(max-width:768px)');
  const navigate = useNavigate();

  const items = [
    { label: 'Home', category: 'All', icon: <HomeIcon /> },
    { label: 'Trending', category: 'Trending', icon: <WhatshotIcon /> },
    { label: 'Subscriptions', category: 'Subscriptions', icon: <SubscriptionsIcon /> },
    { label: 'Library', category: 'Library', icon: <VideoLibraryIcon /> },
  ];

  const handleClick = (category) => {
    setSelectedCategory(category);
    setSearch('');
    navigate('/'); // ✅ route back to Home page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (isSmallScreen) return null;

  return (
    <Box
      sx={{
        width: 200,
        height: '100vh',
        position: 'sticky',
        top: 0,
        bgcolor: '#212121',
        color: 'white',
        px: 2,
        py: 3,
      }}
    >
      <Stack spacing={2}>
        {items.map((item) => (
          <Button
            key={item.label}
            startIcon={item.icon}
            onClick={() => handleClick(item.category)}
            sx={{
              justifyContent: 'flex-start',
              color: 'white',
              textTransform: 'none',
            }}
          >
            {item.label}
          </Button>
        ))}
      </Stack>
    </Box>
  );
};

export default Sidebar;
