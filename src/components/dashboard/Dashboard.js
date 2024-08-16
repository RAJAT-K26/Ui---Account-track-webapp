import React, { useState } from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import Box from '@mui/material/Box';
import WindowIcon from '@mui/icons-material/Window';
import GroupsIcon from '@mui/icons-material/Groups';
import KeyIcon from '@mui/icons-material/Key';
import Chip from '@mui/material/Chip';
import PersonIcon from '@mui/icons-material/Person';
import BusinessIcon from '@mui/icons-material/Business';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import PhoneCallbackIcon from '@mui/icons-material/PhoneCallback';
import SavingsIcon from '@mui/icons-material/Savings';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const IconWrapper = styled('div')(({ theme }) => ({
  backgroundColor: '#E7ECF0',
  border: '5rem',
  borderRadius: '0.5rem',
  height: '7vh',
  width: '7vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export default function Dashboard() {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'flex-start', 
        position: 'fixed', 
        height: '864px', 
        width: '235px', 
        top: 0, 
        left: 0,
        zIndex: 1000,
        paddingTop: '4rem'
      }}>
        <Item sx={{ width: '100%', padding: 0, borderRadius: '20px' }}>
          <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader component="div">
                <Box sx={{ display: 'flex', alignItems: 'center', paddingTop: '2rem' }}>
                  <IconWrapper>
                    <WindowIcon sx={{ color: '#0A3A67' }} />
                  </IconWrapper>
                  <Typography sx={{ marginLeft: '1rem' }}>
                    <Chip label="Dashboard" sx={{ fontWeight: 'bold', color: '#0A3A67' }} />
                  </Typography>
                </Box>
              </ListSubheader>
            }
          >
            <ListItemButton>
              <ListItemIcon>
                <GroupsIcon sx={{color:'#6c89a4'}} />
              </ListItemIcon>
              <ListItemText sx={{color:'#6c89a4'}} primary="Leads" />
            </ListItemButton>

            <ListItemButton>
              <ListItemIcon>
                <KeyIcon sx={{color:'#6c89a4'}}/>
              </ListItemIcon>
              <ListItemText sx={{color:'#6c89a4'}} primary="Buyers" />
            </ListItemButton>

            <ListItemButton>
              <ListItemIcon>
                <PersonIcon sx={{color:'#6c89a4'}}/>
              </ListItemIcon>
              <ListItemText sx={{color:'#6c89a4'}} primary="Clients" />
            </ListItemButton>

            <ListItemButton>
              <ListItemIcon>
                <BusinessIcon sx={{color:'#6c89a4'}}/>
              </ListItemIcon>
              <ListItemText sx={{color:'#6c89a4'}} primary="Properties" />
            </ListItemButton>

            <ListItemButton onClick={handleClick}>
              <ListItemIcon>
                <AssignmentIcon sx={{color:'#6c89a4'}} />
              </ListItemIcon>
              <ListItemText sx={{color:'#6c89a4'}} primary="Orders" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 12 }}>
                  <ListItemText sx={{color:'#6c89a4'}} secondary="Transactional" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 12 }}>
                  <ListItemText sx={{color:'#6c89a4'}} secondary="Non-Transactional" />
                </ListItemButton>
              </List>
            </Collapse>

            <ListItemButton>
              <ListItemIcon>
                <WhatshotIcon sx={{color:'#6c89a4'}}/>
              </ListItemIcon>
              <ListItemText sx={{color:'#6c89a4'}} primary="Red Box" />
            </ListItemButton>

            <ListItemButton>
              <ListItemIcon>
                <PhoneCallbackIcon sx={{color:'#6c89a4'}}/>
              </ListItemIcon>
              <ListItemText sx={{color:'#6c89a4'}} primary="Call Back" />
            </ListItemButton>

            <ListItemButton>
              <ListItemIcon>
                <SavingsIcon sx={{color:'#6c89a4'}}/>
              </ListItemIcon>
              <ListItemText sx={{color:'#6c89a4'}} primary="Investments" />
            </ListItemButton>

            <ListItemButton>
              <ListItemIcon>
                <AccountBalanceWalletIcon sx={{color:'#6c89a4'}} />
              </ListItemIcon>
              <ListItemText sx={{color:'#6c89a4'}} primary="Payments" />
            </ListItemButton>

            <ListItemButton>
              <ListItemIcon>
                <AutoAwesomeIcon sx={{color:'#6c89a4'}}/>
              </ListItemIcon>
              <ListItemText sx={{color:'#6c89a4'}} primary="MAGIK" />
            </ListItemButton>
          </List>
        </Item>
      </Box>
    </>
  );
}
