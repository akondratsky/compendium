import { Outlet } from 'react-router-dom';
import { AppBar, Container, Toolbar, IconButton, Link, useTheme } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import { DarkModeButton } from '../components/DarkModeButton';
import { EditModeButton } from './EditModeButton';
import { ToastContainer } from 'react-toastify';

const Layout = () => {
  const theme = useTheme();
  return (
    <>
      <AppBar position="relative">
        <Toolbar>
          <Link
            variant="h5"
            underline="none"
            href="/"
            color="inherit"
            sx={{ flexGrow: 1 }}
          >
            Find your boilerplate
          </Link>
          <EditModeButton />
          <DarkModeButton />
          <IconButton
            color="inherit"
            onClick={() => window.open('https://github.com/akondratsky/compendium', '_blank')}
          >
            <GitHubIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Container>
        <Outlet />
      </Container>
      <ToastContainer
        position="bottom-left"
        hideProgressBar
        closeOnClick
        autoClose={2500}
        theme={theme.palette.mode}
      />
    </>
  );
};

export default Layout;
