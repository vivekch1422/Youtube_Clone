import React from 'react';
import {
  Box,
  Stack,
  Button,
  Tooltip,
  useMediaQuery,
  Typography,
  Drawer,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';

const drawerWidth = 220;

const SidebarContent = ({ setSelectedCategory, setSearch, handleDrawerToggle }) => {
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
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (handleDrawerToggle) handleDrawerToggle(); // Close drawer
  };

  return (
    <Box
      sx={{
        width: drawerWidth,
        height: '100%',
        bgcolor: '#0f0f0f',
        color: 'white',
        px: 2,
        pt: 10,
      }}
    >
      <Stack spacing={1}>
        {items.map((item) => (
          <Tooltip title={item.label} placement="right" key={item.label}>
            <Button
              startIcon={item.icon}
              fullWidth
              onClick={() => handleClick(item.category)}
              sx={{
                color: 'white',
                justifyContent: 'flex-start',
                textTransform: 'none',
                px: 2,
                py: 1,
                borderRadius: '12px',
                '&:hover': {
                  bgcolor: '#2c2c2c',
                },
              }}
            >
              <Typography variant="body2">{item.label}</Typography>
            </Button>
          </Tooltip>
        ))}
      </Stack>
    </Box>
  );
};

const Sidebar = ({
  setSelectedCategory,
  setSearch,
  mobileOpen,
  handleDrawerToggle,
}) => {
  const isSmallScreen = useMediaQuery('(max-width:768px)');

  if (isSmallScreen) {
    return (
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
            bgcolor: '#0f0f0f',
          },
        }}
      >
        <SidebarContent
          setSelectedCategory={setSelectedCategory}
          setSearch={setSearch}
          handleDrawerToggle={handleDrawerToggle}
        />
      </Drawer>
    );
  }

  return (
    <SidebarContent
      setSelectedCategory={setSelectedCategory}
      setSearch={setSearch}
    />
  );
};

export default Sidebar;
