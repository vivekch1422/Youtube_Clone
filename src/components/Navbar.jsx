import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  Box,
  IconButton,
  Stack,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';

const Navbar = ({ onMenuClick }) => {
  return (
    <AppBar position="static" sx={{ bgcolor: '#202020', px: 2 }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Left: Logo + Menu */}
        <Stack direction="row" spacing={2} alignItems="center">
          <IconButton color="inherit" onClick={onMenuClick}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            <span style={{ color: '#FF0000' }}>My</span>Tube
          </Typography>
        </Stack>

        {/* Center: Search */}
        <Box
          sx={{
            flex: 1,
            maxWidth: 600,
            mx: 4,
            display: 'flex',
            alignItems: 'center',
            bgcolor: '#121212',
            borderRadius: 2,
            border: '1px solid #303030',
            px: 2,
          }}
        >
          <InputBase
            placeholder="Search"
            sx={{ flex: 1, color: 'white', py: 1 }}
          />
          <IconButton sx={{ color: '#aaa' }}>
            <SearchIcon />
          </IconButton>
        </Box>

        {/* Right: Action Icons */}
        <Stack direction="row" spacing={1}>
          <IconButton color="inherit">
            <VideoCallIcon />
          </IconButton>
          <IconButton color="inherit">
            <NotificationsIcon />
          </IconButton>
          <IconButton color="inherit">
            <AccountCircleIcon />
          </IconButton>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
