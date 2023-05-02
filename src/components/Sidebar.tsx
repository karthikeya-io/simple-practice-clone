import React from 'react';
import { Box, Container, CssBaseline, List, ListItem, ListItemText, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import TodayIcon from '@mui/icons-material/Today';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import PaymentIcon from '@mui/icons-material/Payment';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import AssessmentIcon from '@mui/icons-material/Assessment';
import ListIcon from '@mui/icons-material/List';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import LockOpenTwoToneIcon from '@mui/icons-material/LockOpenTwoTone';


const Sidebar: React.FC = () => {
    const drawerItems = [
        { text: 'Calendar', link: '/calendar', icon: <TodayIcon sx={{ fontSize: '1.2rem' }}/> },
        { text: 'Clients', link: '/clients', icon: <PeopleAltIcon sx={{ fontSize: '1.2rem' }} /> },
        { text: 'Billings', link: '/', icon: <PaymentIcon sx={{ fontSize: '1.2rem' }}/> },
        { text: 'Insurance', link: '/', icon: <VerifiedUserIcon sx={{ fontSize: '1.2rem' }}/> },
        { text: 'Analytics', link: '/', icon: <AssessmentIcon sx={{ fontSize: '1.2rem' }}/> },
        { text: 'Account Activity', link: '/', icon: <ListIcon sx={{ fontSize: '1.2rem' }}/> },
        { text: 'Reminders', link: '/', icon: <NotificationsIcon sx={{ fontSize: '1.2rem' }}/> },
        { text: 'Settings', link: '/', icon: <SettingsIcon sx={{ fontSize: '1.2rem' }} /> },
    ];

    return (
        // sidebar should not scroll it should be fixed
        <div style={{ height: "100%" }} >
            <CssBaseline />
            <Box component="nav"
                sx={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    height: '100%',
                    paddingTop: '64px', // Compensate for the header height
                    width: '200px', // Set the width of the sidebar
                    backgroundColor: 'background.paper',
                    marginLeft: "5px"
                }}>
                <List sx={{ margin: 1 }} >
                    {drawerItems.map((item, index) => (
                        <Typography color='grey' >
                            <ListItem button key={index} component={Link} to={item.link} sx={{margin: "0", padding:".5px"}}>
                                {item.icon }
                                <ListItemText sx={{ fontSize: '1.2rem',  marginLeft:"8px" }} primary={item.text}  />
                            </ListItem>
                        </Typography>
                    ))}
                    <hr />
                </List>
                <List sx={{ margin: 1, bottom: -275 }} >
                    <Typography color='grey' >
                        <ListItem button key={1} component={Link} to={'/'} sx={{margin: "0", padding:"1px", border: "solid 1px"}}>
                            <SmartphoneIcon sx={{ fontSize: '1.2rem', color: "black" }} />
                            <ListItemText sx={{ fontSize: '1.2rem',  marginLeft:"8px" }} primary={"Download free app"}  />
                        </ListItem>
                    </Typography>
                    <Typography color='grey' >
                        <ListItem button key={1} component={Link} to={'/'} sx={{margin: "0", padding:"1px"}}>
                            <LockOpenTwoToneIcon sx={{ fontSize: '1.2rem' }} />
                            <ListItemText sx={{ fontSize: '1.2rem',  marginLeft:"8px" }} primary={"Privacy Off"}  />
                        </ListItem>
                    </Typography>
                </List>
            </Box>
        </div>

    );
};

export default Sidebar;
