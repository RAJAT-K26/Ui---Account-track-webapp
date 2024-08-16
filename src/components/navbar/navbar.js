import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import AddIcon from '@mui/icons-material/Add';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

import WorkIcon from '@mui/icons-material/Work';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import DescriptionIcon from '@mui/icons-material/Description';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import MoreVertIcon from '@mui/icons-material/MoreVert';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    
    
}));

const SearchItem = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '1.5rem',
    borderRadius: '0.8rem'

    
}));

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '90%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(-2, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '45ch',
        },
    },
}));

const NavbarWrapper = styled(AppBar)({
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 1000,
    backgroundColor: '#FFFFFF'
});
export default function Navbar() {



    return (
        <>
           <NavbarWrapper>
                
                    <Toolbar >

                        

                       
                       <Grid xs container  spacing={2} justifyContent={'space-evenly'} >
                            <Grid xs = {3} sx={{  maxHeight: '4rem'  }} >

                                <List>
                                    <ListItem>
                                        <ListItemAvatar >
                                        <Avatar
            sx={{ width: '3.2vw', height: '3.2vw' }}
            src={`${process.env.PUBLIC_URL}/profilepic.jpg`}
        />
                                        </ListItemAvatar>
                                        <ListItemText primary="Partner code : IA23522" secondary="Referral code : IA234522"
                                            sx={{ '& .MuiListItemText-primary': { fontSize: '2.2vh', color: 'gray', }, '& .MuiListItemText-secondary': { fontSize: '2.2vh' } }} />
                                    </ListItem>
                                </List>

                            </Grid>
                            <Grid xs = {6} container  alignItems={'center'} sx={{  height: '7.2rem'  }}>

                                <Grid xs>
                                    <SearchItem> <Search>
                                        <SearchIconWrapper>
                                            <SearchIcon />
                                        </SearchIconWrapper>
                                        <StyledInputBase
                                            placeholder="Search Clients, Properties, Services"
                                            inputProps={{ 'aria-label': 'search' }} />
                                    </Search>
                                    </SearchItem>
                                </Grid>


                                
                                <Grid >
                                    
                                        <Button size='large' variant="contained" sx ={{width: '10rem', borderRadius: '0.8rem', bgcolor:'#0a3a67'}}> <AddIcon /> ADD</Button>
                                   
                                </Grid>

                            </Grid>
                            <Grid xs ={2} container spacing={0.5} alignItems={'center'} sx={{  height : '6.3rem' }} justifyContent={'space-between'}>
                            
                                <Grid>
                                    <Item>
                                        <IconButton aria-label="Description">
                                            <DescriptionIcon sx={{color:'#0a3a67'}} />
                                        </IconButton>
                                    </Item>
                                </Grid>

                                <Grid>
                                    <Item>
                                        <IconButton aria-label="Notifications">
                                            <NotificationsNoneIcon sx={{color:'#0a3a67'}}/>
                                        </IconButton>

                                    </Item>
                                </Grid>

                                <Grid>
                                    <Item>
                                        <IconButton aria-label="More">
                                            <MoreVertIcon sx={{color:'#0a3a67'}}/>
                                        </IconButton>

                                    </Item>
                                </Grid>
                            </Grid>
                        </Grid>
                       
                        

                    </Toolbar>

                

            
                    </NavbarWrapper>


        </>
    )
}
