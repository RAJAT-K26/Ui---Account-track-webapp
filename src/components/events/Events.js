import React from 'react';
import { Box, Grid, Typography, Chip, List, ListItem, ListItemText, ListItemAvatar, Avatar, Paper } from '@mui/material';
import EditCalendarOutlinedIcon from '@mui/icons-material/EditCalendarOutlined';
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import Groups3OutlinedIcon from '@mui/icons-material/Groups3Outlined';
import LunchDiningOutlinedIcon from '@mui/icons-material/LunchDiningOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import FreeBreakfastOutlinedIcon from '@mui/icons-material/FreeBreakfastOutlined';
import { styled } from '@mui/system';

const Item = styled(Paper)({
    padding: '16px',
    textAlign: 'center',
    margin: '16px',
    backgroundColor: '#fff',
    color: '#000',
});

const Events = () => (
    <Box sx={{ display: 'flex', justifyContent: 'center', padding: 2 }}>
        <Item sx={{ width: '100%', maxWidth: 371, padding: 0, borderRadius: "20px" }}>
            <Grid container direction="column">
                <Grid container item direction="row" sx={{ justifyContent: 'space-between', marginBottom: '0vh' , paddingTop:'2vh', paddingLeft:'1vh', paddingRight:'1vh'}}>
                    <Grid item xs={6} sx={{ textAlign: 'left', paddingLeft: '1vw' }}>
                        <Typography variant="body2" color="##0a3a67">
                            Events
                        </Typography>
                    </Grid>

                    <Grid item xs={6} sx={{ textAlign: 'right', paddingRight: '1px' }}>
                        <Chip
                            label={
                                <Box sx={{ display: 'flex', alignItems: 'center',color:'#0a3a67' }}>
                                    <span>Create Event</span>
                                    <EditCalendarOutlinedIcon sx={{ ml: 1, height: '2.5vh',color:'#0a3a67' }} />
                                </Box>
                            }
                            variant="outlined"
                            sx={{ borderRadius: '6px', height: '3.4vh', marginRight: '1vw', marginLeft: '-6vw' }}
                        />
                        <Chip
                            variant="outlined"
                            avatar={<ArrowRightAltOutlinedIcon sx={{ paddingLeft: '1vw' }} />}
                            sx={{ bgcolor: 'white', borderRadius: '6px', height: '3.4vh', justifyContent: 'center' }}
                        />
                    </Grid>
                </Grid>

                <Grid container className='New' sx={{ mt: 0 }}>
                    <Grid item xs={12}> {/* Full width grid item */}
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DateCalendar sx={{color:'#0a3a67'}}/>
                        </LocalizationProvider>
                    </Grid>
                </Grid>

                {/* New Grid for Report Chip */}
                <Grid container sx={{ justifyContent: 'center' }}>
                    <Chip
                        label={
                            <Box sx={{ display: 'flex', alignItems: 'center' ,color:'#0a3a67'}}>
                                <span>View DSR Report</span>
                                <ArrowRightAltOutlinedIcon sx={{ ml: 1 }} /> {/* Add margin to separate text and icon */}
                            </Box>
                        }
                        variant="outlined"
                        sx={{ borderRadius: '6px', height: '3.4vh' }}
                    />
                </Grid>

                <Grid container>

                    <List sx={{
                        width: '100%',
                        maxWidth: 360,
                        bgcolor: 'background.paper',
                        position: 'relative',
                        overflow: 'auto',
                        maxHeight: '300px',
                        '& ul': { padding: 0 },
                    }}
                        subheader={<li />}>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar sx={{ bgcolor: '#6db1e0' }}>
                                    <WorkOutlineOutlinedIcon sx={{ bgcolor: '#6db1e0' }} />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Meeting with Existing..." secondary="Meeting with client for 1hr 30min" />
                        </ListItem>

                        <ListItem>
                            <ListItemAvatar>
                                <Avatar sx={{bgcolor: '#13942f'}}>
                                    <VideocamOutlinedIcon sx={{bgcolor: '#13942f'}}/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Wade Warren" secondary="Daily standUp schedule for 1hr..." />
                        </ListItem>

                        <ListItem>
                            <ListItemAvatar>
                                <Avatar sx={{bgcolor:'#ff6b6b'}}>
                                    <VideocamOutlinedIcon sx={{bgcolor:'#ff6b6b'}} />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Leslie Alexander" secondary="Meeting with vinay for 1hr" />
                        </ListItem>

                        <ListItem>
                            <ListItemAvatar>
                                <Avatar sx={{ bgcolor: '#42c478' }}> 
                                    <LunchDiningOutlinedIcon x={{bgcolor:'#ff6b6b'}} />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Lunch" secondary="Went to lunch for 1hr" />
                        </ListItem>

                        <ListItem>
                            <ListItemAvatar>
                            <Avatar sx={{ bgcolor: '#d3756b' }}> 
                                    <Groups3OutlinedIcon sx={{ bgcolor: '#d3756b' }}/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Jenny Wilson" secondary="Meeting with Vinay for 45min" />
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar sx={{bgcolor:'#ff6b6b'}}>
                                    <VideocamOutlinedIcon sx={{bgcolor:'#ff6b6b'}} />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Mukesh" secondary="Submitting Report in 3 hrs" />
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                            <Avatar sx={{ bgcolor: '#d3756b' }}> 
                                    <FreeBreakfastOutlinedIcon sx={{ bgcolor: '#d3756b' }}/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Break" secondary="Break for 20min" />
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar sx={{ bgcolor: '#53bae2' }}>
                                    <Groups3OutlinedIcon sx={{ bgcolor: '#53bae2' }}/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Jenny Wilson" secondary="Update Finance record by 5pm" />
                        </ListItem>

                    </List>
                </Grid>
            </Grid>
        </Item>
    </Box>
);

export default Events;

