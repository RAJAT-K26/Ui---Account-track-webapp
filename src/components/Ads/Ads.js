import React from 'react'

import { Box, Grid, Typography, Paper, InputLabel } from '@mui/material';

import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';

import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import GroupsIcon from '@mui/icons-material/Groups';

import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { LineChart } from '@mui/x-charts/LineChart';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
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

const data1 = [
    { label: 'Exp 7 days ', value: 400 },
    { label: 'Exp 7 days', value: 300 },
    { label: 'Exp 7 days', value: 300 },
   
  ];

const data = [
    { label: 'Group A', value: 400 },
    { label: 'Group B', value: 300 },
    { label: 'Group C', value: 300 },

];


const Item = styled(Paper)({
    padding: '16px',
    textAlign: 'center',
    margin: '16px',
    backgroundColor: '#fff',
    color: '#000',
});

let theme = createTheme();
theme = responsiveFontSizes(theme);

const Root = styled('div')(({ theme }) => ({
    width: '100%',
    ...theme.typography.body2,
    color: theme.palette.text.secondary,
    '& > :not(style) ~ :not(style)': {
        marginTop: theme.spacing(2),
    },
}));


export default function

    () {

    const [age, setAge] = React.useState('');
    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'center', padding: 2 }}>
                <Item sx={{ width: '100%', maxWidth: 993, padding: 0, borderRadius: "20px" }}>
                    <Paper sx={{ width: '100%', maxWidth: 993, padding: 0, borderRadius: "20px" }}>
                        <Grid item xs={12} sx={{ height: '339', width: '687', paddingTop: '2vh' }}>
                            <Grid container sx={{ justifyContent: 'space-between' }}>
                                <Grid item xs={6} sx={{ textAlign: 'left', paddingLeft: '2vw', marginBottom: '2vh' }}>
                                    <Typography variant="body2" color="#0a3a67">
                                        Expiring Ads
                                    </Typography>
                                    <Typography variant="h6" sx={{ textAlign: 'left', fontSize: "1.8vh" }}> Insights of the Ads posted for every sell/rent proprty </Typography>
                                </Grid>

                                <Grid item xs={6} sx={{ textAlign: 'right', paddingRight: '8px' }}>
                                    <Chip
                                        sx={{
                                            justifyContent: 'center',
                                            marginTop: '1.2vh',
                                            width: 'auto',
                                            height: '4.5vh',
                                            borderRadius: '10px'
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
                                            <Box sx={{ display: 'flex', alignItems: 'center', width: '6vw', fontSize: '0.8vw' }}>
                                                <span>View Details</span>
                                                <ArrowRightAltOutlinedIcon sx={{ ml: 1 }} /> {/* Add margin to separate text and icon */}
                                            </Box>
                                        }
                                        variant="outlined"
                                        sx={{ borderRadius: '6px', height: '3.7vh', marginTop: '0.7vh' }}
                                    />

                                </Grid>
                            </Grid>
                            <Grid sx={{ height: '325px' }}>
                                <PieChart
                                    series={[
                                        {
                                            innerRadius: 80,
                                            outerRadius: 220,
                                            endAngle: 90,
                                            startAngle: -90,
                                            data: [{ value:20, color: '#95bdff', label:'Exp in 7' }, { value: 13,color: '#e9edc9',label:'Exp in 12'  },{ value: 13,color: '#ffaacf',label:'Exp in 2'  }],
                                            cornerRadius: 5,
                                            cx: 280,
                                            cy: 250,
                                        },

                                    ]}
                                    height={500}
                                    slotProps={{
                                        legend: {
                                          direction: 'row',
                                          position: { vertical: 'top', horizontal: 'right' },
                                          padding: 70,
                                          itemMarkWidth: 14,
                                          itemMarkHeight: 14,
                                          markGap: 33,
                                          itemGap: 25,
                                        }
                                      }}
                                />

                            </Grid>

                        </Grid>
                    </Paper>
                </Item>
            </Box>

        </>
    )
}
