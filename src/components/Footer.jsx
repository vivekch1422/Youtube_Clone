import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: '#1976d2',
        color: 'white',
        textAlign: 'center',
        py: 2,
        mt: 4,
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} MyTube. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
