import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


const pages = ['Products', 'Pricing', 'About'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const UpperMainBar = () =>  {

  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
    <Toolbar>
      <Typography variant="h6" noWrap component="div">
        Clipped drawer
      </Typography>
    </Toolbar>
    </AppBar>
  );
}
export default UpperMainBar;