import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Button,
  InputBase,
} from '@mui/material';
import { Search as SearchIcon, Add as AddIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';



const Header: React.FC = () => {
  return (
    <AppBar position="fixed"  >
      <Toolbar>
        <img
        style={{
          marginRight: '10px',
        }} 
        height='22px' src="https://d34piorrop57r.cloudfront.net/frontend/assets/images/logo-white@2x-de2a63f37a89a3e1e51b486d3170bf3c-v1.png" alt="" />
        <Box sx={{ flexGrow: 1, backgroundColor: "red", maxWidth: "175px"}}>
          <IconButton color="inherit" sx={{
            zIndex: 1,
            position: 'absolute',
            // marginLeft: '20px',
          }}>
            <SearchIcon sx={
              {
                marginTop: '-2px',
              }
            } />
          </IconButton>
          <InputBase
            placeholder="Search clients"
            inputProps={{ 'aria-label': 'search' }}
            sx={{
              color: 'inherit',
              paddingLeft: 5,
              paddingRight: 1,
              width: '100%',
              backgroundColor: '#0e5291',
            }}
          />
        </Box>
        <IconButton sx={{
          marginLeft: "45%"
        }} color="inherit" component={Link} to="/create">
          <AddIcon sx={{
            fontSize: '1.2rem',
          }}/>
          <Button sx={{
            textTransform: 'none',
          }} color="inherit">Create</Button>
        </IconButton>
        <IconButton color="inherit" component={Link} to="/">
          <EventNoteOutlinedIcon sx={{
            fontSize: '1.2rem',
          }}/>
        <Button sx={{
          fontSize: '.8rem',
          textTransform: 'none',
        }}  color="inherit">Requests</Button>
        </IconButton>
        <IconButton color="inherit" component={Link} to="/">
          <ChatBubbleIcon sx={{
            fontSize: '1.2rem',
          }} />  
        <Button sx={{
          fontSize: '.8rem',
          textTransform: 'none',
        }}  color="inherit">Messages</Button>
        </IconButton>
        
        <Button sx={{
          fontSize: '.8rem',
          textTransform: 'none',
          backgroundColor: '#ff5933',
        }} color="inherit">Activate Plan</Button>
        <IconButton color="inherit" component={Link} to="/">
          <AccountCircleIcon sx={{
            fontSize: '1.5rem',
          }}/>
        {/* <Button sx={{
          fontSize: '.8rem',
        }}  color="inherit">Requests</Button> */}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
