import React from 'react'
// import { styled } from '@mui/material/styles';
import { Box, Grid, Typography, Paper, InputLabel } from '@mui/material';
import CircleText from './CircleText';
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';

import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Switch from '@mui/material/Switch';
import CardContent from '@mui/material/CardContent';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import { PieChart } from '@mui/x-charts/PieChart';
import FilterListRoundedIcon from '@mui/icons-material/FilterListRounded';

import { useDrawingArea } from '@mui/x-charts/hooks';
import Stack from '@mui/material/Stack';
// import { PieChart } from '@mui/x-charts/PieChart';

const Root = styled('div')(({ theme }) => ({
    width: '100%',
    ...theme.typography.body2,
    color: theme.palette.text.secondary,
    '& > :not(style) ~ :not(style)': {
        marginTop: theme.spacing(2),
    },
}));
const Item = styled(Paper)({
    padding: '16px',
    textAlign: 'center',
    margin: '16px',
    backgroundColor: '#fff',
    color: '#000',
});

const data = [
    { label: 'Group A', value: 400 },
    { label: 'Group D', value: 200 },
];

export default function Pipeline() {
    const [expanded, setExpanded] = React.useState(false);

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const content = (
        <p>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`}</p>
    );

    
    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'center', padding: 2 }}>
                <Item sx={{ width: '100%', maxWidth: 993, padding: 0, borderRadius: "20px" }}>
                    <Paper sx={{ width: '100%', maxWidth: 993, padding: 0, borderRadius: "20px" }}>
                        <Grid item xs={12} sx={{ height: '339', width: '687' ,paddingTop:'2vh'}}>
                            <Grid container sx={{ justifyContent: 'space-between' }}>
                                <Grid item xs={6} sx={{ textAlign: 'left', paddingLeft: '2vw', marginBottom: '2vh' }}>
                                    <Typography variant="body2" color="#0a3a67">
                                        Pipeline
                                    </Typography>
                                    <Typography variant="h6" sx={{ textAlign: 'left', fontSize: "1.8vh" }}> Insights showing total clients and properties </Typography>
                                </Grid>

                                <Grid item xs={6} sx={{ textAlign: 'right', paddingRight: '8px' }}>
                                    <Chip
                                        sx={{
                                            justifyContent: 'center',
                                            marginTop: '1.2vh',
                                            width: 'auto',
                                            height: '4.5vh',
                                            borderRadius: '10px'
                                            ,color:'#0a3a67'
                                        }}
                                        avatar={<FilterListRoundedIcon />} // Adding the icon inside the Avatar component
                                        label="Filter" />
                                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                                        <InputLabel sx={{
                                            fontSize: '2.3vh',
                                            justifyContent: 'center',
                                            marginTop: '-6px',
                                            // Adjust the value to move the label upwards
                                        }} id="demo-select-small-label">Period</InputLabel>
                                        <Select
                                            labelId="demo-select-small-label"
                                            id="demo-select-small"
                                            value={age}
                                            label="today"
                                            onChange={handleChange}
                                            sx={{
                                                borderRadius: '7px',
                                                height: '4vh',
                                                '& .MuiInputLabel-root': { // Selecting the label element
                                                    fontSize: '3vh' // Adjust the font size as needed
                                                }
                                            }}
                                        >
                                            <MenuItem value="Today">
                                                <em>Today</em>
                                            </MenuItem>
                                            <MenuItem value={10}>1 week ago</MenuItem>
                                            <MenuItem value={20}>1 month ago</MenuItem>
                                            <MenuItem value={30}>3 month ago</MenuItem>
                                        </Select>
                                    </FormControl>
                                    <Chip
                        label={
                            <Box sx={{ display: 'flex', alignItems: 'center',width:'6vw',fontSize:'0.8vw' ,color:'#0a3a67'}}>
                                <span>View Details</span>
                                <ArrowRightAltOutlinedIcon sx={{ ml: 1 }} /> {/* Add margin to separate text and icon */}
                            </Box>
                        }
                        variant="outlined"
                        sx={{ borderRadius: '6px', height: '3.7vh',marginTop:'0.7vh' }}
                    />

                                </Grid>
                            </Grid>
                            <Grid container rowSpacing={1} >
                                <Grid xs={6}>
                                    <Item>
                                    <Typography variant="body1" sx={{ color: "#0a3a67", paddingBottom:'-5vw', textAlign:'left' }}>
                      Transactional
                    </Typography>
                                        <PieChart
                                            series={[
                                                {
                                                    data: [{ value: 30, color: '#ffabab' }, { value: 13,color: '#ffc26f' }, { value: 22,color: '#b5d5c5' },{ value: 15,color: '#91c8e4' },{ value: 25,color: '#e25e3e' }],
                                                    highlightScope: { faded: 'global', highlighted: 'item' },
                                                    faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                                                    cx: 220,
                                                    cy: 90,
                                                },

                                            ]}
                                            height={200}
                                            marginBottom={80}
                                            slotProps={{
                                                legend: { hidden: true },
                                            }}
                                        />



                                        <Root>
                                            <Grid container spacing={1} mt={2} sx={{ width: '350px', justifyContent: 'center', alignItems: 'center', marginLeft: '4vw' }}>

                                                <Grid item xs={4} sx={{ textAlign: 'left' }}>
                                                    <Typography variant="body2" color="#0a3a67">
                                                        <CircleText color="#ceab93" text="Text" />
                                                    </Typography>

                                                </Grid>

                                                <Grid item xs={4} sx={{ textAlign: 'left' }}>
                                                    <Typography variant="body2" color="#ceab93">
                                                        40
                                                    </Typography>
                                                    <Chip label="+200" sx={{ fontWeight: 'bold', color: '#84cc7e', bgcolor: '#f0f9ef', height: '2vh', width: '4vw' }} />
                                                </Grid>

                                                <Grid item xs={4} sx={{ textAlign: 'left' }}>
                                                    <Typography variant="body2" color="#ceab93" sx={{ fontWeight: 'bold' }}>
                                                        ₹ 10.15L
                                                    </Typography>
                                                    <Chip label="+200" sx={{ fontWeight: 'bold', color: '#84cc7e', bgcolor: '#f0f9ef', height: '2vh', width: '4vw' }} />
                                                </Grid>
                                            </Grid>
                                            <Divider></Divider>
                                            <Grid container spacing={1} mt={2} sx={{ width: '350px', justifyContent: 'center', alignItems: 'center', marginLeft: '4vw' }}>

                                                <Grid item xs={4} sx={{ textAlign: 'left' }}>
                                                    <Typography variant="body2" color="#0a3a67">
                                                        <CircleText color="#9db2bf" text="Text" />
                                                    </Typography>

                                                </Grid>

                                                <Grid item xs={4} sx={{ textAlign: 'left' }}>
                                                    <Typography variant="body2" color="#9db2bf">
                                                        40
                                                    </Typography>
                                                    <Chip label="+200" sx={{ fontWeight: 'bold', color: '#84cc7e', bgcolor: '#f0f9ef', height: '2vh', width: '4vw' }} />
                                                </Grid>

                                                <Grid item xs={4} sx={{ textAlign: 'left' }}>
                                                    <Typography variant="body2" color="#9db2bf" sx={{ fontWeight: 'bold' }}>
                                                        ₹ 10.15L
                                                    </Typography>
                                                    <Chip label="+200" sx={{ fontWeight: 'bold', color: '#84cc7e', bgcolor: '#f0f9ef', height: '2vh', width: '4vw' }} />
                                                </Grid>
                                            </Grid>
                                            <Divider ></Divider>
                                            <Grid container spacing={1} mt={2} sx={{ width: '350px', justifyContent: 'center', alignItems: 'center', marginLeft: '4vw' }}>

                                                <Grid item xs={4} sx={{ textAlign: 'left' }}>
                                                    <Typography variant="body2" color="#0a3a67">
                                                        <CircleText color="#bface2" text="Text" />
                                                    </Typography>

                                                </Grid>

                                                <Grid item xs={4} sx={{ textAlign: 'left' }}>
                                                    <Typography variant="body2" color="#bface2">
                                                        40
                                                    </Typography>
                                                    <Chip label="+200" sx={{ fontWeight: 'bold', color: '#84cc7e', bgcolor: '#f0f9ef', height: '2vh', width: '4vw' }} />
                                                </Grid>

                                                <Grid item xs={4} sx={{ textAlign: 'left' }}>
                                                    <Typography variant="body2" color="#bface2" sx={{ fontWeight: 'bold' }}>
                                                        ₹ 10.15L
                                                    </Typography>
                                                    <Chip label="+200" sx={{ fontWeight: 'bold', color: '#84cc7e', bgcolor: '#f0f9ef', height: '2vh', width: '4vw' }} />
                                                </Grid>
                                            </Grid>
                                            <Divider ></Divider>
                                            <Grid container spacing={1} mt={2} sx={{ width: '350px', justifyContent: 'center', alignItems: 'center', marginLeft: '4vw' }}>

                                                <Grid item xs={4} sx={{ textAlign: 'left' }}>
                                                    <Typography variant="body2" color="#0a3a67">
                                                        <CircleText color="#fa9884" text="Text" />
                                                    </Typography>

                                                </Grid>

                                                <Grid item xs={4} sx={{ textAlign: 'left' }}>
                                                    <Typography variant="body2" color="#fa9884">
                                                        40
                                                    </Typography>
                                                    <Chip label="+200" sx={{ fontWeight: 'bold', color: '#84cc7e', bgcolor: '#f0f9ef', height: '2vh', width: '4vw' }} />
                                                </Grid>

                                                <Grid item xs={4} sx={{ textAlign: 'left' }}>
                                                    <Typography variant="body2" color="#fa9884" sx={{ fontWeight: 'bold' }}>
                                                        ₹ 10.15L
                                                    </Typography>
                                                    <Chip label="+200" sx={{ fontWeight: 'bold', color: '#84cc7e', bgcolor: '#f0f9ef', height: '2vh', width: '4vw' }} />
                                                </Grid>
                                            </Grid>

                                            <Divider>

                                            </Divider>
                                            <Grid container spacing={1} mt={2} sx={{ width: '350px', justifyContent: 'center', alignItems: 'center', marginLeft: '4vw' }}>

                                                <Grid item xs={4} sx={{ textAlign: 'left' }}>
                                                    <Typography variant="body2" color="#0a3a67">
                                                        <CircleText color="#ceab93" text="Text" />
                                                    </Typography>

                                                </Grid>

                                                <Grid item xs={4} sx={{ textAlign: 'left' }}>
                                                    <Typography variant="body2" color="#ceab93">
                                                        40
                                                    </Typography>
                                                    <Chip label="+200" sx={{ fontWeight: 'bold', color: '#84cc7e', bgcolor: '#f0f9ef', height: '2vh', width: '4vw' }} />
                                                </Grid>

                                                <Grid item xs={4} sx={{ textAlign: 'left' }}>
                                                    <Typography variant="body2" color="#ceab93" sx={{ fontWeight: 'bold' }}>
                                                        ₹ 10.15L
                                                    </Typography>
                                                    <Chip label="+200" sx={{ fontWeight: 'bold', color: '#84cc7e', bgcolor: '#f0f9ef', height: '2vh', width: '4vw' }} />
                                                </Grid>
                                            </Grid>
                                        </Root></Item>
                                </Grid>
                                <Grid xs={6}>
                                    <Item>
                                    <Typography variant="body1" sx={{ color: "#0a3a67", paddingBottom:'-5vw', textAlign:'left' }}>
                      Non-Transactional
                    </Typography>

                                        <PieChart
                                            series={[
                                                {
                                                    data: [{ value: 10 ,color:'#ceab93' }, { value: 15,color:'#ffebb4' }, { value: 20,color:'#9db2bf' },{ value: 30,color:'#bface2' },{ value: 25 ,color:'#fa9884'}],
                                                    highlightScope: { faded: 'global', highlighted: 'item' },
                                                    faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                                                    cx: 220,
                                                    cy: 90,
                                                },
                                            ]}
                                            height={200}
                                            slotProps={{
                                                legend: { hidden: true },
                                            }}
                                        />

                                        <Root>
                                            <Grid container spacing={1} mt={2} sx={{ width: '350px', justifyContent: 'center', alignItems: 'center', marginLeft: '4vw' }}>

                                                <Grid item xs={4} sx={{ textAlign: 'left' }}>
                                                    <Typography variant="body2" color="#0a3a67">
                                                        <CircleText color="#ffabab" text="Text" />
                                                    </Typography>

                                                </Grid>

                                                <Grid item xs={4} sx={{ textAlign: 'left' }}>
                                                    <Typography variant="body2" color="#ffabab">
                                                        40
                                                    </Typography>
                                                    <Chip label="+200" sx={{ fontWeight: 'bold', color: '#84cc7e', bgcolor: '#f0f9ef', height: '2vh', width: '4vw' }} />
                                                </Grid>

                                                <Grid item xs={4} sx={{ textAlign: 'left' }}>
                                                    <Typography variant="body2" color="#ffabab" sx={{ fontWeight: 'bold' }}>
                                                        ₹ 10.15L
                                                    </Typography>
                                                    <Chip label="+200" sx={{ fontWeight: 'bold', color: '#84cc7e', bgcolor: '#f0f9ef', height: '2vh', width: '4vw' }} />
                                                </Grid>
                                            </Grid>
                                            <Divider></Divider>
                                            <Grid container spacing={1} mt={2} sx={{ width: '350px', justifyContent: 'center', alignItems: 'center', marginLeft: '4vw' }}>

                                                <Grid item xs={4} sx={{ textAlign: 'left' }}>
                                                    <Typography variant="body2" color="#0a3a67">
                                                        <CircleText color="#ffc26f" text="Text" />
                                                    </Typography>

                                                </Grid>

                                                <Grid item xs={4} sx={{ textAlign: 'left' }}>
                                                    <Typography variant="body2" color="#ffc26f">
                                                        40
                                                    </Typography>
                                                    <Chip label="+200" sx={{ fontWeight: 'bold', color: '#84cc7e', bgcolor: '#f0f9ef', height: '2vh', width: '4vw' }} />
                                                </Grid>

                                                <Grid item xs={4} sx={{ textAlign: 'left' }}>
                                                    <Typography variant="body2" color="#ffc26f" sx={{ fontWeight: 'bold' }}>
                                                        ₹ 10.15L
                                                    </Typography>
                                                    <Chip label="+200" sx={{ fontWeight: 'bold', color: '#84cc7e', bgcolor: '#f0f9ef', height: '2vh', width: '4vw' }} />
                                                </Grid>
                                            </Grid>

                                            <Divider ></Divider>

                                            <Grid container spacing={1} mt={2} sx={{ width: '350px', justifyContent: 'center', alignItems: 'center', marginLeft: '4vw' }}>

                                                <Grid item xs={4} sx={{ textAlign: 'left' }}>
                                                    <Typography variant="body2" color="#0a3a67">
                                                        <CircleText color="#b5d5c5" text="Text" />
                                                    </Typography>

                                                </Grid>

                                                <Grid item xs={4} sx={{ textAlign: 'left' }}>
                                                    <Typography variant="body2" color="#b5d5c5">
                                                        40
                                                    </Typography>
                                                    <Chip label="+200" sx={{ fontWeight: 'bold', color: '#84cc7e', bgcolor: '#f0f9ef', height: '2vh', width: '4vw' }} />
                                                </Grid>

                                                <Grid item xs={4} sx={{ textAlign: 'left' }}>
                                                    <Typography variant="body2" color="#b5d5c5" sx={{ fontWeight: 'bold' }}>
                                                        ₹ 10.15L
                                                    </Typography>
                                                    <Chip label="+200" sx={{ fontWeight: 'bold', color: '#84cc7e', bgcolor: '#f0f9ef', height: '2vh', width: '4vw' }} />
                                                </Grid>
                                            </Grid>

                                            <Divider ></Divider>

                                            <Grid container spacing={1} mt={2} sx={{ width: '350px', justifyContent: 'center', alignItems: 'center', marginLeft: '4vw' }}>

                                                <Grid item xs={4} sx={{ textAlign: 'left' }}>
                                                    <Typography variant="body2" color="#0a3a67">
                                                        <CircleText color="#91c8e4" text="Text" />
                                                    </Typography>

                                                </Grid>

                                                <Grid item xs={4} sx={{ textAlign: 'left' }}>
                                                    <Typography variant="body2" color="#91c8e4">
                                                        40
                                                    </Typography>
                                                    <Chip label="+200" sx={{ fontWeight: 'bold', color: '#84cc7e', bgcolor: '#f0f9ef', height: '2vh', width: '4vw' }} />
                                                </Grid>

                                                <Grid item xs={4} sx={{ textAlign: 'left' }}>
                                                    <Typography variant="body2" color="#91c8e4" sx={{ fontWeight: 'bold' }}>
                                                        ₹ 10.15L
                                                    </Typography>
                                                    <Chip label="+200" sx={{ fontWeight: 'bold', color: '#84cc7e', bgcolor: '#f0f9ef', height: '2vh', width: '4vw' }} />
                                                </Grid>
                                            </Grid>
                                            <Divider>

                                            </Divider>
                                            <Grid container spacing={1} mt={2} sx={{ width: '350px', justifyContent: 'center', alignItems: 'center', marginLeft: '4vw' }}>

                                                <Grid item xs={4} sx={{ textAlign: 'left' }}>
                                                    <Typography variant="body2" color="#0a3a67">
                                                        <CircleText color="#e25e3e" text="Text" />
                                                    </Typography>

                                                </Grid>

                                                <Grid item xs={4} sx={{ textAlign: 'left' }}>
                                                    <Typography variant="body2" color="#e25e3e">
                                                        40
                                                    </Typography>
                                                    <Chip label="+200" sx={{ fontWeight: 'bold', color: '#84cc7e', bgcolor: '#f0f9ef', height: '2vh', width: '4vw' }} />
                                                </Grid>

                                                <Grid item xs={4} sx={{ textAlign: 'left' }}>
                                                    <Typography variant="body2" color="#e25e3e" sx={{ fontWeight: 'bold' }}>
                                                        ₹ 10.15L
                                                    </Typography>
                                                    <Chip label="+200" sx={{ fontWeight: 'bold', color: '#84cc7e', bgcolor: '#f0f9ef', height: '2vh', width: '4vw' }} />
                                                </Grid>
                                            </Grid>
                                        </Root>


                                    </Item>
                                </Grid>
                                
                            </Grid>
                            <Stack direction="row">


                            </Stack>
                        </Grid>
                    </Paper>
                </Item>
            </Box>
        </>
    )
}
