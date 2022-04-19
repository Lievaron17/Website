import {
  Box,
  AppBar,
  IconButton,
  Button,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import Dashboard from './components/Dashboard';


// icons
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
export default function App() {

  const history = useHistory();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar>
        <Toolbar>
          <IconButton
            size="large"
            onClick={() => history.goBack()}
          >
            <ArrowBackIcon />
          </IconButton>

          <Button
            color="inherit"
            onClick={() => history.push('/home')}
          >
            Home 
          </Button>

          <Button 
            color="inherit"
            onClick= {() => history.push('/contact-us')}
          >
            Contact Us 
          </Button>

          <Typography>
            Institute of Railway Technology (IRT) Database
          </Typography>

        </Toolbar>
        
      </AppBar>

      <div style={{padding: '5%'}}>
        <Dashboard />
      </div>
    </Box>
  );
}