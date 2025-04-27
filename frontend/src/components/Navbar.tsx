import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          주문 시스템
        </Typography>
        <Button color="inherit" component={RouterLink} to="/">
          주문하기
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 