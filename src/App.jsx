import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import VideoDetail from './pages/VideoDetail';
import Channel from './pages/Channel';
import NotFound from './pages/NotFound';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [search, setSearch] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  return (
    <BrowserRouter>
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          bgcolor: '#121212',
        }}
      >
        <Navbar onMenuClick={handleDrawerToggle} />
        <Box sx={{ flex: 1, display: 'flex' }}>
          <Sidebar
            setSelectedCategory={setSelectedCategory}
            setSearch={setSearch}
            mobileOpen={mobileOpen}
            handleDrawerToggle={handleDrawerToggle}
          />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  selectedCategory={selectedCategory}
                  search={search}
                  setSearch={setSearch}
                />
              }
            />
            <Route path="/video/:id" element={<VideoDetail />} />
            <Route path="/channel/:name" element={<Channel />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Box>
        <Footer />
      </Box>
    </BrowserRouter>
  );
}

export default App;
